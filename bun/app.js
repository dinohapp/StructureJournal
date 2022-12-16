
let now = Date.now();
import { db, initializeDB } from './db';
import { formatDate } from './timeHandler';
import { fetchEntries } from './updateEntries';
initializeDB();
now = formatDate(new Date(now))
console.log(now);
//check if database has any entries for the now.year
//if not, create one
if(db.query(`SELECT * FROM years WHERE year = ${now.year}`).get() === null) {
    db.exec("INSERT INTO years VALUES ($year, $goals, $summary, $easter10, $halfway_review)" , {
        $year: now.year,
        $goals: "test1",
        $summary: "",
        $easter10: "",
        $halfway_review: "",
    })
}

//year, goals, summary, easter10, halfway_review
//season, goals, summary
//month, goals, summary
//week, goals, summary, direction_plan_steps, project
//day, goals, recap

db.close();