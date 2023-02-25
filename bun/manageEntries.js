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

let getEntry = (date, data) => {
    //running updateEntry first, otherwise it would return null for all the fields.
    updateEntry(date, data);
    let entry = {};
    entry.year = db.query(`SELECT * FROM years WHERE year = '${date.year}'`).get();
    entry.season = db.query(`SELECT * FROM seasons WHERE season = '${date.season}'`).get();
    entry.month = db.query(`SELECT * FROM months WHERE month = '${date.month}'`).get();
    entry.week = db.query(`SELECT * FROM weeks WHERE week = '${date.week}'`).get();
    entry.day = db.query(`SELECT * FROM days WHERE day = '${date.day}'`).get();

    return entry;
}

//try to get the entry from the database and create it if it does not exist
let updateEntry = (date, data) => {
    db.exec("INSERT OR REPLACE INTO years VALUES ($year, $goals, $summary, $easter10, $halfway_review)", {
        $year: date.year,
        $goals: data.year.goals,
        $summary: data.year.summary,
        $easter10: data.year.easter10,
        $halfway_review: data.year.halfway_review,
    })
    db.exec("INSERT OR REPLACE INTO seasons VALUES ($season, $goals, $summary)", {
        $season: date.season,
        $goals: data.season.goals,
        $summary: data.season.summary,
    })
    db.exec("INSERT OR REPLACE INTO months VALUES ($month, $goals, $summary)", {
        $month: date.month,
        $goals: data.month.goals,
        $summary: data.month.summary,
    })
    db.exec("INSERT OR REPLACE INTO weeks VALUES ($week, $goals, $summary, $direction_plan_steps, $big_goal, $project)", {
        $week: date.week,
        $goals: data.week.goals,
        $summary: data.week.summary,
        $direction_plan_steps: data.week.direction_plan_steps,
        $big_goal: data.week.big_goal,
        $project: data.week.project,
    })
    db.exec("INSERT OR REPLACE INTO days VALUES ($day, $goals, $summary)", {
        $day: date.day,
        $goals: data.day.goals,
        $summary: data.day.summary,
    })
};

let deleteEntry = (date) => {
    //TODO add deletion logic here
    db.exec("DELETE FROM days WHERE day = " + date.day )
    console.log("Deleted" + date.day);
}

//let updateEntry = (date, data) => {
    // if(db.query(`SELECT * FROM days WHERE day = '${date.day}'`).get() === null) {
    //     db.exec(`INSERT OR REPLACE INTO days VALUES ($day, $goals, $summary) , {
    //         $day: ${date.day},
    //         $goals: ${data.day.goals},
    //         $summary: ${data.day.summary},
    //         }`)
    //     }
    //     console.log(db.query(`SELECT * FROM days WHERE day = '${date.day}'`).get())

//     if(db.query(`SELECT * FROM days WHERE day = '${date.day}'`).get() === null) {
//         db.exec("INSERT INTO days VALUES ($day, $goals, $summary)" , {
//             $day: date.day,
//             $goals: "",
//             $summary: "",
//             })
//         }
// };

// let updateEntry = (date, data) => {
//     db.exec(`UPDATE months SET (month, goals, summary) , {
//         month = ${date.month},
//         goals = ${data.month.goals},
//         summary = ${data.month.summary}
//     }`);
// };
// db.exec(`UPDATE months SET 
//     month = ${date.month},
//     goals = ${data.month.goals},
//     summary = ${data.month.summary}
//     `)
//  };

// let updateEntry = (date, data) => {
//     db.exec("UPDATE months VALUES SET ($month, $goals, $summary)", {
//         $month: date.month,
//         $goals: data.month.goals,
//         $summary: data.month.summary,
//         })
// };


// let updateEntry = (date) => {
//     db.exec("INSERT INTO years VALUES ($year, $goals, $summary, $easter10, $halfway_review)" , {
//         $year: date.year,
//         $goals: data.goals,
//         $summary: data.summary,
//         $easter10: data.easter10,
//         $halfway_review: data.halfway_review,
//         })
// };


export { getEntry, updateEntry, deleteEntry };