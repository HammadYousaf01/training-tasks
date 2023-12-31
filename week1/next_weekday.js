// Task: Find the next occurrence of a specific weekday after a given date
// Write a function called nextWeekdayAfter that takes a Date object 
// representing a starting date and a number representing a specific 
// weekday (0 for Sunday, 1 for Monday, etc.) as parameters. The function 
// should calculate and return the next occurrence of the specified weekday 
// that comes after the starting date.


function nextWeekdayAfter(startDateObj, weekDay) {
    const startDate = startDateObj.getDate();
    const startDay = startDateObj.getDay();

    const nextWeekday = startDate + weekDay - startDay;

    if (weekDay > startDay) {
        startDateObj.setDate(nextWeekday);
    } else {
        startDateObj.setDate(nextWeekday + 7);
    }

    return startDateObj;
}


const startDate = new Date();
const weekDay = 1;
const nextWeekday = nextWeekdayAfter(startDate, weekDay);
console.log(nextWeekday);