import { db } from './db';
//TODO
/*format the date to following format for each table to be used as PK 
years: YYYY 
seasons: YYYY-Q[1-4] 1=Spring, 2=Summer, 3=Fall, 4=Winter
months: YYYY-M[1-12]
weeks:  YYYY-W[0-53]
days: YYYY-M[1-12]-D[1-7]
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

let formatDate = (date) => {
    formattedDate.year = `${date.getFullYear()}`;
    formattedDate.month =`${formattedDate.year}-${date.getMonth() + 1}`;
    formattedDate.day = `${formattedDate.year}-${date.getMonth() + 1}-${date.getDate()}`;
    formattedDate.week = `${formattedDate.year}-W${db.query("SELECT strftime('%W', "+formattedDate.day+" )").values()[0][0]}`;
    formattedDate.season = `${formattedDate.year}-${getSeason(date.getMonth() + 1)}`;

    return formattedDate;
}

export { formatDate };