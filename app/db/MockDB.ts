import { Database } from "bun:sqlite";

// Creating new database for each test can not be optimal tho
export const createMockDB = () => {
	const db = new Database(":memory:");

	db.run(
		"CREATE TABLE IF NOT EXISTS subscribers (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT)",
	);

	return Object.freeze(db);
};
