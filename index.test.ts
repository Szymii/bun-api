import { describe, expect, it } from "bun:test";
import app from ".";

describe("Routing is up", () => {
	it("Should return 200 Response", async () => {
		const req = new Request("http://localhost/");
		const res = await app.fetch(req);
		expect(res.status).toBe(200);
	});

	it("Should return 404 Response with custom message", async () => {
		const req = new Request("http://localhost/notexistingroute");
		const res = await app.fetch(req);

		expect(res.status).toBe(404);
		expect(await res.text()).toBe("Custom 404 Message");
	});
});
