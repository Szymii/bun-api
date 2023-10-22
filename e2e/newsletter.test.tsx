import app from "..";
import { describe, expect, it } from "bun:test";

describe("Newsletter route", () => {
	const EMAIL = "test@example.com";

	it("should return html on get request", async () => {
		const req = new Request("http://localhost/newsletter");

		const res = await app.fetch(req);

		expect(res.status).toBe(200);
		expect(await res.text()).toContain("html");
	});

	it("should return message with invited user email", async () => {
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

	// This test depends on previous one :/
	it("should return 400 when email already exists", async () => {
		const req = new Request("http://localhost/newsletter/signup", {
			method: "POST",
			body: JSON.stringify({ email: EMAIL }),
		});

		const res = await app.fetch(req);
		const json = await res.json();

		expect(res.status).toBe(400);
		expect(json.message).toContain("Email already exist");
	});

	it("should return 400 when body is not a string", async () => {
		const req = new Request("http://localhost/newsletter/signup", {
			method: "POST",
			body: JSON.stringify({ email: 123 }),
		});

		const res = await app.fetch(req);
		const json = await res.json();

		expect(res.status).toBe(400);
		expect(json.email).toContain("Not a string");
	});

	it("should return 400 when email is incorrect", async () => {
		const req = new Request("http://localhost/newsletter/signup", {
			method: "POST",
			body: JSON.stringify({ email: "this-is-not-an-email" }),
		});

		const res = await app.fetch(req);
		const json = await res.json();

		expect(res.status).toBe(400);
		expect(json.email).toContain("Incorrect email");
	});
});
