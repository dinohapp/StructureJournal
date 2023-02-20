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

    let dateSchema =
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

let getEntry = (date) => {
    let dateObj = {};
    if(db.query(`SELECT * FROM years WHERE year = '${date.year}'`).get() === null) {
        db.exec("INSERT INTO years VALUES ($year, $goals, $summary, $easter10, $halfway_review)" , {
            $year: date.year,
            $goals: "",
            $summary: "",
            $easter10: "",
            $halfway_review: "",
            })
        }
    dateObj.year = db.query(`SELECT * FROM years WHERE year = '${date.year}'`).get();

    if(db.query(`SELECT * FROM seasons WHERE season = '${date.season}'`).get() === null) {
        db.exec("INSERT INTO seasons VALUES ($season, $goals, $summary)" , {
            $season: date.season,
            $goals: "",
            $summary: "",
            })
        }
    dateObj.season = db.query(`SELECT * FROM seasons WHERE season = '${date.season}'`).get();

    if(db.query(`SELECT * FROM months WHERE month = '${date.month}'`).get() === null) {
        db.exec("INSERT INTO months VALUES ($month, $goals, $summary)" , {
            $month: date.month,
            $goals: "",
            $summary: "",
            })
        }
    dateObj.month = db.query(`SELECT * FROM months WHERE month = '${date.month}'`).get();


    if(db.query(`SELECT * FROM weeks WHERE week = '${date.week}'`).get() === null) {
        db.exec("INSERT INTO weeks VALUES ($week, $goals, $summary,             $direction_plan_steps, $big_goal, $project)" , {
            $week: date.week,
            $goals: "",
            $summary: "",
            $direction_plan_steps:"",
            $big_goal:"",
            $project:"",
            })
        }
    dateObj.week = db.query(`SELECT * FROM weeks WHERE week = '${date.week}'`).get();
    
    if(db.query(`SELECT * FROM days WHERE day = '${date.day}'`).get() === null) {
        db.exec("INSERT INTO days VALUES ($day, $goals, $summary)" , {
            $day: date.day,
            $goals: "",
            $summary: "",
            })
        }

    dateObj.day = db.query(`SELECT * FROM days WHERE day = '${date.day}'`).get();
    return dateObj;
}

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

export { manageEntries, getEntry };