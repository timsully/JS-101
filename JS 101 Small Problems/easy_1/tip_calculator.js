/*
Create a simple tip calculator. The program should prompt for a bill
amount and a tip rate. The program must compute the tip, and then log
both the tip and the total amount of the bill to the console. You can
ignore input validation and assume that the user will enter numbers.
*/
let rlSync = require("readline-sync");

let bill = Number(rlSync.question("What was the initial price of you order?\n"));
let tip = Number(rlSync.question("What was the tip percentage?\n"));

// convert tip to percentage based value
let tipConversion = bill.length-2;
let tipFinal = bill/Math.pow(10, tipConversion);


// What is the bill? 200
console.log(`Bill: ${bill}`);
// What is the tip percentage? 15
console.log(`Tip percentage: ${tipFinal}`);

// The tip is $30.00
console.log(`Tip: ${tip}`);

// The total is $230.00
console.log(`Total: ${tip + bill}`);
