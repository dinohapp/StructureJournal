import { Database } from "bun:sqlite";
const fs = require('fs');
const db = new Database("./bun/db.sqlite", { readwrite: true, create:true });
let initializeDB = () => {
    if (!fs.existsSync("./bun/db.sqlite")) { //if the database file does not exist, initialize the database
        db.exec(
            "CREATE TABLE years (year TEXT PRIMARY KEY NOT NULL, goals TEXT, summary TEXT, easter10 TEXT, halfway_review TEXT);");
        db.exec(
            "CREATE TABLE seasons (season TEXT PRIMARY KEY NOT NULL, goals TEXT, summary TEXT);");
        db.exec(
            "CREATE TABLE months (month TEXT PRIMARY KEY NOT NULL, goals TEXT, summary TEXT);");
        db.exec(
            "CREATE TABLE weeks (week TEXT PRIMARY KEY NOT NULL, goals TEXT, summary TEXT, direction_plan_steps TEXT, project TEXT);");
        db.exec(
            "CREATE TABLE days (day TEXT PRIMARY KEY NOT NULL, goals TEXT, recap TEXT);");
    };
};
export { db, initializeDB };