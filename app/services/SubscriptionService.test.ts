import { SubscriptionService } from ".";
import { createMockDB } from "../db/MockDB";
import { SubscribersRepository } from "../repositories";
import { getID } from "../utils/getId";
import { describe, expect, it } from "bun:test";

describe("Subscription service", () => {
	it("Add new subscriber to DB", async () => {
		// arrange
		const MockDB = createMockDB();
		const emailRepo = new SubscribersRepository(MockDB);
		const subService = new SubscriptionService(emailRepo);
		const EMAIL = `${getID(10)}@example.com`;

		// act
		subService.addSubscriber(EMAIL);

		// assert
		expect(
			!!emailRepo.getAllSubscribers().find(({ email }) => email === EMAIL),
		).toBe(true);
	});
});
