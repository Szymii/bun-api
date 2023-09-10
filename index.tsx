import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();
app.get("/", (c) => c.text("Hello Bun!"));
app.get(
  "/demo",
  serveStatic({
    path: "./static/index.html",
  })
);

app.notFound((c) => {
  return c.text("Custom 404 Message", 404);
});

export default app;
