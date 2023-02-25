
let now = Date.now();
import { db, initializeDB } from './initDB';
import { formatDate } from './formatDate';
import {getEntry, updateEntry } from './manageEntries';
initializeDB();
let tod = new Date();
let tom = new Date();
tom = tom.setDate(tod.getDate()+1)
now = formatDate(new Date(tom));
console.log(`CURRENT DATA:`);
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
console.log(getEntry(now, entryChanges));
//updateEntry(now, entryChanges)
db.close();