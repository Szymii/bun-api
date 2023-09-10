import { Hono } from "hono";
import { demo } from "./app/router/demo";

const app = new Hono();

app.get("/", (c) => c.text("Hello Bun!"));
app.notFound((c) => {
  return c.text("Custom 404 Message", 404);
});
app.route("/demo", demo);

app.showRoutes();

export default app;
