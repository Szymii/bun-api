import { Hono } from "hono";
import { NewsletterPage } from "../resources";
import { object, parse, string } from "valibot";
import { getMailsCountQuery } from "../repositories";
import { EmailSubscriptionService, SendEmailService } from "../services";

export const newsletter = new Hono();

newsletter.get("/", (c) => {
  const userCount = getMailsCountQuery();

  return c.html(<NewsletterPage customerCount={userCount + 1} />);
});

newsletter.post("/signup", async (c) => {
  const data = await c.req.json();

  try {
    const { email } = parse(object({ email: string() }), data);
    const emailSubscriptionService = new EmailSubscriptionService();
    const sendEmailService = new SendEmailService();

    emailSubscriptionService.subscribe(sendEmailService.sendSignUpConfirmation);
    emailSubscriptionService.subscribeUser(email);

    return c.text(`${email} has been invited to newsletter`);
  } catch (e) {
    // error
  }
});
