import { describe, expect, it } from "bun:test";
import { EmailRepository } from ".";
import MockDB from "../db/MockDB";
import { getID } from "../utils/getId";

describe("Email repository", () => {
	it("Should write email to DB", async () => {
		const emailRepo = new EmailRepository(MockDB);
		const EMAIL = `${getID(10)}@example.com`;

		emailRepo.insertNewMail(EMAIL);

		expect(
			!!emailRepo.getAllEmails().find(({ email }) => email === EMAIL),
		).toBe(true);
	});
});
