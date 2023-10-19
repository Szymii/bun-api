import { Database } from "bun:sqlite";

const db = new Database(":memory:");

db.run(
	"CREATE TABLE IF NOT EXISTS subscribers (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT)",
);

const MemDB = Object.freeze(db);
export default MemDB;
