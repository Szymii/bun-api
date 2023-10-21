import app from "../..";
import { expect, it } from "bun:test";

it("Should return 404 Response with custom message", async () => {
	const req = new Request("http://localhost/notexistingroute");
	const res = await app.fetch(req);

	expect(res.status).toBe(404);
	expect(await res.text()).toBe("Custom 404 Message");
});
