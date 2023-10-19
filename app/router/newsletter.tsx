import { Hono } from "hono";
import { object, parse, string } from "valibot";
import { SubscribersRepository } from "../repositories";
import { NewsletterPage } from "../resources";
import { SubscriptionService, SendEmailService } from "../services";

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
		const { email } = parse(object({ email: string() }), data);

		subscriptionService.subscribe(sendEmailService.sendSignUpConfirmation);
		subscriptionService.addSubscriber(email);
		subscriptionService.unsubscribe(
			sendEmailService.sendSignUpConfirmation,
		);

		return c.text(`${email} has been invited to newsletter`);
	} catch (e) {
		// console.log(e)
	}
});
