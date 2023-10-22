import { Hono } from "hono";
import {
	ValiError,
	email as botEmail,
	flatten,
	object,
	parse,
	string,
} from "valibot";
import { SubscribersRepository } from "../repositories";
import { NewsletterPage } from "../resources";
import { SendEmailService, SubscriptionService } from "../services";

import MemDB from "../db";

const emailRepo = new SubscribersRepository(MemDB);

const subscriptionService = new SubscriptionService(emailRepo);
const sendEmailService = new SendEmailService();

export const newsletter = new Hono();

newsletter.get("/", (c) => {
	const userCount = emailRepo.getSubscribersCount();

	return c.html(<NewsletterPage customerCount={userCount + 1} />);
});

newsletter.post("/signup", async (c) => {
	const data = await c.req.json();

	try {
		const { email } = parse(
			object({ email: string("Not a string", [botEmail("Incorrect email")]) }),
			data,
		);

		subscriptionService.subscribe(sendEmailService.sendSignUpConfirmation);
		subscriptionService.addSubscriber(email);
		subscriptionService.unsubscribe(sendEmailService.sendSignUpConfirmation);

		return c.text(`${email} has been invited to newsletter`);
	} catch (e) {
		if (e instanceof ValiError) {
			return c.json(flatten(e).nested, 400);
		}

		if (e instanceof Error && e.message === "Email already exist") {
			return c.json({ message: e.message }, 400);
		}

		return c.json(e, 500);
	}
});
