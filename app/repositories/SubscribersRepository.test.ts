import { SubscribersRepository } from ".";
import { createMockDB } from "../db/MockDB";
import { getID } from "../utils/getId";
import { describe, expect, it } from "bun:test";

describe("Subscribers repository", () => {
	it("Should write email to DB", async () => {
		// arrange
		const MockDB = createMockDB();
		const emailRepo = new SubscribersRepository(MockDB);
		const EMAIL = `${getID(10)}@example.com`;

		// act
		emailRepo.insertNewMail(EMAIL);

		// assert
		expect(
			!!emailRepo.getAllSubscribers().find(({ email }) => email === EMAIL),
		).toBe(true);
	});

	it("Should throw error if email already exist", async () => {
		const MockDB = createMockDB();
		const emailRepo = new SubscribersRepository(MockDB);
		const EMAIL = `${getID(10)}@example.com`;
		const throwable = () => {
			emailRepo.insertNewMail(EMAIL);
		};

		emailRepo.insertNewMail(EMAIL);

		expect(throwable).toThrow(new Error("Email already exist"));
	});

	it("Should count all subscribers", () => {
		const MockDB = createMockDB();
		const emailRepo = new SubscribersRepository(MockDB);
		const EMAILS = Array.from({ length: 4 }).map(
			() => `${getID(10)}@example.com`,
		);

		EMAILS.forEach((email) => emailRepo.insertNewMail(email));

		expect(emailRepo.getSubscribersCount()).toBe(EMAILS.length);
	});

	it("Should get subscriber by email", () => {
		const MockDB = createMockDB();
		const emailRepo = new SubscribersRepository(MockDB);

		emailRepo.insertNewMail("test@example.com");
		const sub = emailRepo.getSubscriberByEmail("test@example.com");

		expect(sub).not.toBe(null);
	});

	it("Should not find subscriber", () => {
		const MockDB = createMockDB();
		const emailRepo = new SubscribersRepository(MockDB);

		emailRepo.insertNewMail("test@example.com");
		const sub = emailRepo.getSubscriberByEmail("testv2@example.com");

		expect(sub).toBe(null);
	});
});
