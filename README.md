# Description
StructureJournal is a personal agenda planner and bullet journal. Live by desing, not by default.
I'm attempting to move my paper-based bullet journal system to digital form and have fun in the process.
Intended for everyday use and experimenting with different languages.
General idea is pretty simple: 
Weekly agenda planner with goals for the week and each day, as well as big goals for the next 1,3 and 5+ years.
```
5+ years
 |- my life purpose in two sentences
 |- motivational quotes / custom field / free thougts
 |- goals
 |- years summary
 |_3 years
   |- goals
   |- 3 year summary
   |_1 year
     |- goals
     |- year summary
     |- 6 months / birthday review
     |- easter list of 10 (every easter write 10 achievable goals for the year)
     |_Season 1-4
       |- goals
       |- summary
       |- view of the goals for each month of the season
       |_Month 1-12
         |- month habits (loop habits)
         |- big goals (1y, 3y, 5+y)
         |- goals
         |- summary
         |- view of each week's goals
         |_Week 1-52
           |- goals
           |- summary
           |- direction/plan/steps
           |- big goal
           |- project
           |_Day Mon..Sun
             |- goals
             |- day recap / journal
             |- link to the month habit tracking
```
Month Habit Tracking:
Each day of the month would have a checkmark and a list of things that would need to be completed. I think Loop Habit Tracker (https://github.com/iSoron/uhabits) does a great job at it. Might just have a link to the app somehow or utilize the web version when it becomes available.

# Installation
No installation required yet.

# Running
bunjs ./bun/app.js

## Notes:
### Progress so far:
2022-11-03
- Tried to make project with bun but it requires me to reinstall Linux to never version.
- Gonna do project in Node.js and put Bun on the backburner.
- Tried running on bun again - it runs as a snap package but only as a runtime. Good enough.
- Considered using moment.js but decided against it to keep the app lightweight.
- researching how to use strftime() - done. Looks like a good option, should be compatible with other programming languages as well.

2022-11-05
- defined the basic structure of the database with SQL statements
- tried to include test for the app.js but can't quite grasp the concept of TDD yet. Will write unit tests after I have better concept o the code structure.

2022-11-07
- Moved the database creation logic to ./db.js. 
- There should be a better way to run queries than .exec(). Need to research that.
- Created timeHandler.js to create the specific date object.
- Realized that what I need is not actually quarters of the year but the seasons, renamed the database accordingly.
- Attempted to go with native JS Date methods (doesn't have weeks) or sqlite's strfitme(), looks like all I have to do is to derive the season from the month.

2022-11-08
- Decided to go with Date.toISOString().slice(0, 10) instead of the native .getMonth, .getDate methods
- Fixed a bug: db.sqlite was created in the parent folder and another db.js was being created in the ./bun/ folder.
- fs.existsSync() checks if the file is there and the db = new Database creates the empty file. Decided to remove the fs.existsSync() and add IF NOT EXISTS constraint to each table query (I think that's a better design anyway.)

2022-12-13
- Finally have time to work on the project. The next logical thing is to be able to add entries to the database.
- First, query the database for an existing year. If it does not exist, create with all the fields empty. Do the same process for season, month, week and day. All fields are derived from timeHandler.js -> formatDate(). 

2022-12-15
- Thinking through the MVP of the app. User interface does not matter at this point, just need to be able to add entries to the database and be able to view them. CRU(D).

2023-02-18
 - Back at the project. At the moment, just getting to understand where I left off. Even forgot how to run the project. Need to add it to the documentation.
 - Renamed the function names for better clarity of their function.
 - Deciding how to handle each of the etnries: year, season, month, week, day. At the moment will have all of them take $type, goals and summary as parameters. For simplicity.
 - Next step: figure out how to best pass the date and the fields for each date and implement the logic for creating a new entry, if there is none; or updating it, if there is one.

2023-02-20
 - Trying to figure out the best way to manage the data and maintain the schema of each entry. So far the code is very redundant. I'm hoping to have the working model and then remove redundancy.

2023-02-22
 - Found that the formatDate is returning the next day instead of current day. Adjusted for the timezone offset with date.getTime() - date.getTimezoneOffset()*60000)
 - Had to stop working, next time continue on updateEntry function.

# Contributing
Feel free to contribute to this project or reach out with any suggestions.

# License
GNU GPLv3