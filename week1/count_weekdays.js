// Task: Count the number of weekdays between two given dates
// Write a function called countWeekdays that takes two Date 
// objects representing a start date and an end date as parameters. 
// The function should calculate and return the number of weekdays (Monday to Friday) 
// between the two dates, inclusive of the start and end dates.


function countWeekdays(startDate, endDate) {
    const timeDifferenceInMiliseconds = endDate - startDate;
    const totalDays = Math.floor(timeDifferenceInMiliseconds / (1000 * 60 * 60 * 24)) + 1;
    let totalWeekDays = 0;

    const weekDayStart = startDate.getDay();
    let weekDayRef = weekDayStart;

    for (let i = 0; i < totalDays; i++) {
        if (weekDayRef != 6 & weekDayRef != 7) {
            totalWeekDays++;
        }

        if (weekDayRef == 7) {
            weekDayRef = 1;
        } else {
            weekDayRef++;
        }
    }
    return totalWeekDays;
}

const startDate = new Date('2023-06-05');
const endDate = new Date('2023-07-05');

const totalWeekDays = countWeekdays(startDate, endDate);
console.log(totalWeekDays);