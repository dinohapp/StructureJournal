import { Serve } from "bun";
let now = Date.now();
import { db, initializeDB } from './initDB';
import { formatDate } from './formatDate';
import {getEntry, updateEntry, deleteEntry } from './manageEntries';
initializeDB();
//the portion below is used to manually change the day of the month, for testing.
let tod = new Date();
let tom = new Date();
tom = tom.setDate(tod.getDate()+0);
now = formatDate(new Date(tom));
deleteEntry(now);
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

export default {
    fetch(req) {
      return new Response(Bun.file("./bun/index.html"))
    }
}