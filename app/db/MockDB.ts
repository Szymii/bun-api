import { Database } from "bun:sqlite";

const db = new Database(":memory:");

db.run(
	"CREATE TABLE IF NOT EXISTS emails (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT)",
);

const MockDB = Object.freeze(db);
export default MockDB;
