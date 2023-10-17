import { Hono } from "hono";
import { object, parse, string } from "valibot";
import { EmailRepository, getMailsCountQuery } from "../repositories";
import { NewsletterPage } from "../resources";
import { EmailSubscriptionService, SendEmailService } from "../services";

import MemDB from "../db";

const emailRepo = new EmailRepository(MemDB);

const emailSubscriptionService = new EmailSubscriptionService(emailRepo);
const sendEmailService = new SendEmailService();

export const newsletter = new Hono();

newsletter.get("/", (c) => {
	const userCount = getMailsCountQuery();

	return c.html(<NewsletterPage customerCount={userCount + 1} />);
});

newsletter.post("/signup", async (c) => {
	const data = await c.req.json();

	try {
		const { email } = parse(object({ email: string() }), data);

		emailSubscriptionService.subscribe(sendEmailService.sendSignUpConfirmation);
		emailSubscriptionService.subscribeUser(email);
		emailSubscriptionService.unsubscribe(
			sendEmailService.sendSignUpConfirmation,
		);

		return c.text(`${email} has been invited to newsletter`);
	} catch (e) {
		// console.log(e)
	}
});
