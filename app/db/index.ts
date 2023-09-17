import { Database } from "bun:sqlite";

const db = new Database(":memory:");

db.run(
	"CREATE TABLE IF NOT EXISTS emails (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT)",
);

const MemDB = Object.freeze(db);
export default MemDB;
