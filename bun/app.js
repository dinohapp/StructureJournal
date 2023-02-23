
let now = Date.now();
import { db, initializeDB } from './initDB';
import { formatDate } from './formatDate';
import {getEntry, updateEntry } from './manageEntries';
initializeDB();
now = formatDate(new Date(now));
console.log(`CURRENT DATA:`);
console.log(getEntry(now));
let date = now; //for testing purposes
let entryChanges = {
    year: {
        year: date.year,
        goals: "",
        summary: "",
        easter10: "",
        halfway_review: "",
    },
    season: {
        season: date.season,
        goals: "",
        summary: "",
    },
    month: {
        month: date.month,
        goals: "",
        summary: "",
    },
    week: {
        week: date.week,
        goals:"",
        summary:"",
        direction_plan_steps:"",
        big_goal:"",
        project:"",
    },
    day: {
        day: date.day,
        goals: "",
        summary: "",
    },
}
updateEntry(now, entryChanges)
db.close();