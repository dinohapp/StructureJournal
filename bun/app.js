
let now = Date.now();
console.log(now);
//strftime(now);
//console.log(db.query("SELECT strftime('%Y-%m-%d %H:%M:%S','now')").values()) //format the current date and time with strftime()
import { db, initializeDB } from './db';
initializeDB();
db.close();
