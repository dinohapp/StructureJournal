//This file is used to initialize the database and create the initial tables.
import { Database } from "bun:sqlite";
const fs = require('fs');
const db = new Database("./bun/db.sqlite", { readwrite: true, create:true });
let initializeDB = () => {
    db.exec(
        "CREATE TABLE IF NOT EXISTS years (year TEXT PRIMARY KEY NOT NULL, goals TEXT, summary TEXT, easter10 TEXT, halfway_review TEXT);");
    db.exec(
        "CREATE TABLE IF NOT EXISTS seasons (season TEXT PRIMARY KEY NOT NULL, goals TEXT, summary TEXT);");
    db.exec(
        "CREATE TABLE IF NOT EXISTS months (month TEXT PRIMARY KEY NOT NULL, goals TEXT, summary TEXT);");
    db.exec(
        "CREATE TABLE IF NOT EXISTS weeks (week TEXT PRIMARY KEY NOT NULL, goals TEXT, summary TEXT, direction_plan_steps TEXT, big_goal TEXT, project TEXT);");
    db.exec(
        "CREATE TABLE IF NOT EXISTS days (day TEXT PRIMARY KEY NOT NULL, goals TEXT, summary TEXT);");
};
export { db, initializeDB };