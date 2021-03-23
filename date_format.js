// JavaScript Program to display the current day and time in the format: 
// Today is: Mon Mar 08 2021 19:43:15.

let day = Date();
console.log("Today is " + `${day}`);

// formatting the output
let todayDate = new Date();
let day2 = todayDate.getDate();
let month = todayDate.getMonth() + 1;
let year = todayDate.getFullYear();

console.log("Today's date is: "+ `${day2} / ${month} / ${year}`);