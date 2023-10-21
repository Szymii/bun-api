import { Hono } from "hono";

import { newsletter, notFound } from "./app/router";

const app = new Hono();

app.get("/", (c) => c.text("Hello Bun!"));
app.notFound(notFound);
app.route("/newsletter", newsletter);

app.showRoutes();

export default {
	port: 5001,
	fetch: app.fetch,
};
