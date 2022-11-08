
let now = Date.now();
import { db, initializeDB } from './db';
import { formatDate } from './timeHandler';
initializeDB();
console.log(formatDate(new Date(now)))


db.close();
