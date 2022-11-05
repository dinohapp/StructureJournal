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
     |_Quarter 1-4
       |- goals
       |- summary
       |- view of the goals for each month of the quarter
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
           |- project
           |_Day Mon..Sun
             |- goals
             |- day recap / journal
             |- link to the month habit tracking
```
Month Habit Tracking:
Each day of the month would have a checkmark and a list of things that would need to be completed. I think Loop Habit Tracker (https://github.com/iSoron/uhabits) does a great job at it. Might just have a link to the app somehow or utilize the web version when it becomes available.
   
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

# Contributing
Feel free to contribute to this project or reach out to me with any suggestions.

# License
GNU GPLv3