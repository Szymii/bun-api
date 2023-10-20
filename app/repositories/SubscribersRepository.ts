import { Subscriber } from "../models/Subscriber";
import Database from "bun:sqlite";

export class SubscribersRepository {
	private db: Database;

	constructor(db: Database) {
		this.db = db;
	}

	insertNewMail(email: string) {
		const query = this.db.query(
			"insert into subscribers (email) values ($email)",
		);

		return query.run(email);
	}

	getAllSubscribers() {
		const query = this.db.query("SELECT * FROM subscribers");
		const result = query.all() as Array<{ id: string; email: string }>;

		return result.map((item) => new Subscriber(item.id, item.email));
	}

	getSubscribersCount() {
		const query = this.db.query(
			"SELECT COUNT(*) AS subscribers FROM subscribers",
		);
		const { subscribers } = query.get() as { subscribers: number };

		return subscribers;
	}
}
