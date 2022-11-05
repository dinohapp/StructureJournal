import { Database } from "bun:sqlite";
let now = Date.now();
console.log(now);
//strftime(now);
const db = new Database("db.sqlite", { readwrite: true, create:true });
//console.log(db.query("SELECT strftime('%Y-%m-%d %H:%M:%S','now')").values()) //format the current date and time with strftime()
db.exec(
    "CREATE TABLE years (year INTEGER PRIMARY KEY NOT NULL, goals TEXT, summary TEXT, easter10 TEXT, halfway_review TEXT);");
db.exec(
    "CREATE TABLE quarters (quarter TEXT PRIMARY KEY NOT NULL, goals TEXT, summary TEXT);");
db.exec(
    "CREATE TABLE months (month TEXT PRIMARY KEY NOT NULL, goals TEXT, summary TEXT);");
db.exec(
    "CREATE TABLE weeks (week TEXT PRIMARY KEY NOT NULL, goals TEXT, summary TEXT, direction_plan_steps TEXT, project TEXT);");
db.exec(
    "CREATE TABLE days (day TEXT PRIMARY KEY NOT NULL, goals TEXT, summary TEXT, recap TEXT);");    
db.close();