import { Hono } from "hono";
import { NewsletterPage } from "../resources/NewsletterPage";

export const demo = new Hono();

demo.get("/", (c) => c.html(<NewsletterPage customerCount={0} />));

demo.post("/newsletter", (c) => {
  const email = "Stefan@exampl.ecom";
  console.log(c);

  return c.text(`${email} has been invited to newsletter`);
});
