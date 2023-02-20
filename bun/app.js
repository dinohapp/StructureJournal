
let now = Date.now();
import { db, initializeDB } from './initDB';
import { formatDate } from './formatDate';
import { manageEntries, getEntry } from './manageEntries';
initializeDB();
now = formatDate(new Date(now))
console.log(now);
console.log(getEntry(now));
//manageEntries(now);
db.close();