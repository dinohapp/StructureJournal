import { Database } from "bun:sqlite";
let now = Date.now();
console.log(now);
//strftime(now);
let db = new Database();
console.log(db.query("SELECT strftime('%Y-%m-%d %H:%M:%S','now')").values()) //format the current date and time with strftime()