import app from "..";
import { describe, expect, it } from "bun:test";

describe("Newsletter route", () => {
	it("should return html on get request", async () => {
		const req = new Request("http://localhost/newsletter");

		const res = await app.fetch(req);

		expect(res.status).toBe(200);
		expect(await res.text()).toContain("html");
	});

	it("should return message with invited user email", async () => {
		const EMAIL = "test@example.com";
		const req = new Request("http://localhost/newsletter/signup", {
			method: "POST",
			body: JSON.stringify({ email: EMAIL }),
		});

		const res = await app.fetch(req);

		expect(res.status).toBe(200);
		expect(await res.text()).toContain(
			`${EMAIL} has been invited to newsletter`,
		);
	});

	it.todo("should return 400 when email already exists", async () => {
		//
	});

	it.todo("should return 400 body is incorrect", async () => {
		//
	});
});
