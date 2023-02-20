import { db } from './initDB';

//Desired database schema:
//year, goals, summary, easter10, halfway_review
//season, goals, summary
//month, goals, summary
//week, goals, summary, direction_plan_steps, big_goal, project
//day, goals, summary

/*possible structure for the entry object
{
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
*/

let manageEntries = (date) => {
    //check if database has any entries for the now.year
    //if not, create one
    //TODO: rewrite the database access with async/await
    if(db.query(`SELECT * FROM years WHERE year = ${date.year}`).get() === null) {
//        createEntry(date);
    } else {
//        updateEntry(date);
    }
};

let createEntry = (date) => {
    db.exec("INSERT INTO years VALUES ($year, $goals, $summary, $easter10, $halfway_review)" , {
        $year: date.year,
        $goals: "",
        $summary: "",
        $easter10: "",
        $halfway_review: "",
    })
};

// let updateEntry = (date) => {
//     db.exec("INSERT INTO years VALUES ($year, $goals, $summary, $easter10, $halfway_review)" , {
//         $year: date.year,
//         $goals: data.goals,
//         $summary: data.summary,
//         $easter10: data.easter10,
//         $halfway_review: data.halfway_review,
//         })
// };
let deleteEntry = (date) => {
    //TODO add deletion logic here
    //db.exec("INSERT INTO years VALUES ($year, $goals, $summary, $easter10, $halfway_review)"    
}

export { manageEntries };