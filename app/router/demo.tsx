import { Hono } from "hono";
import { NewsletterPage } from "../resources/NewsletterPage";
import { object, parse, string } from "valibot";
import { insertNewMailQuery, getMailsCountQuery } from "../modules";

export const demo = new Hono();

demo.get("/", (c) => {
  const userCount = getMailsCountQuery();
  return c.html(<NewsletterPage customerCount={userCount + 1} />);
});

demo.post("/newsletter", async (c) => {
  const data = await c.req.json();
  try {
    const { email } = parse(object({ email: string() }), data);
    insertNewMailQuery(email);

    return c.text(`${email} has been invited to newsletter`);
  } catch (e) {
    // error
  }
});
