import Database from "bun:sqlite";

export class EmailRepository {
	private db: Database;

	constructor(db: Database) {
		this.db = db;
	}

	insertNewMail(email: string) {
		const query = this.db.query("insert into emails (email) values ($email)");
		return query.run(email);
	}

	getAllEmails() {
		const query = this.db.query("SELECT * FROM emails");
		const result = query.all() as Array<{ id: number; email: string }>;

		return result;
	}
}
