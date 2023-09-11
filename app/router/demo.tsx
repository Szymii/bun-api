import { Hono } from "hono";
import { NewsletterPage } from "../resources/NewsletterPage";
import { object, parse, string } from "valibot";

export const demo = new Hono();

demo.get("/", (c) => c.html(<NewsletterPage customerCount={0} />));

demo.post("/newsletter", async (c) => {
  const data = await c.req.json();
  const { email } = parse(object({ email: string() }), data);

  return c.text(`${email} has been invited to newsletter`);
});
