import { db } from './db';
//TODO
/*format the date to following format for each table to be used as PK
years: YYYY
seasons: YYYY-season
months: YYYY-[1-12]
weeks:  YYYY-W[1-54]
days: YYYY-[1-12]-[1-30/31]
*/
/*valid strftime() substitutions:
%d		day of month: 00
%m		month: 01-12
%w		day of week 0-6 with Sunday==0
%W		week of year: 00-53
*/

//borrowed from https://gist.github.com/jossef/d904cd0838304b0e6c01
let getSeason = (month) => {
    if (3 <= month && month <= 5) {
        return 'spring';
      }
      if (6 <= month && month <= 8) {
        return 'summer';
      }
      if (9 <= month && month <= 11) {
        return 'autumn';
      }
      return 'winter';
}

let formattedDate = {};
//decided against using JS native .getMonth/Date/Year since it adds unnecessary complexity and using Date.toISOString with slice() is more readable
let formatDate = (date) => {
    formattedDate.year = date.toISOString().slice(0, 4);
    formattedDate.month = date.toISOString().slice(0, 7);
    formattedDate.day = date.toISOString().slice(0, 10);
    formattedDate.week = `${formattedDate.year}-W${
        Number(
            db.query(
                `SELECT strftime('%W', '${formattedDate.day}')`)
                .values()[0][0]) + 1}`; //this line needs to be refactored to avoid unnecessary complexity. It uses SQL strftime() method to get the week of the year (0-53) and adds 1 to make it human-readable format. Bun's query() method returns an array, hence the values()[0][0]
    formattedDate.season = `${formattedDate.year}-${getSeason(date.getMonth() + 1)}`;

    return formattedDate;
}

export { formatDate };