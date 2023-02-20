
let now = Date.now();
import { db, initializeDB } from './initDB';
import { formatDate } from './formatDate';
import { manageEntries } from './manageEntries';
initializeDB();
now = formatDate(new Date(now))
console.log(now);
manageEntries(now);
db.close();