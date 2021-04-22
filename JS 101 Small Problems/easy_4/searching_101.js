/*
Write a program that solicits six numbers from the user and logs a message that
describes whether the sixth number appears among the first five numbers.
*/
let rlSync = require("readline-sync");

let number1 = Number(rlSync.question("Enter the 1st number: "));
let number2 = Number(rlSync.question("Enter the 2nd number: "));
let number3 = Number(rlSync.question("Enter the 3rd number: "));
let number4 = Number(rlSync.question("Enter the 4th number: "));
let number5 = Number(rlSync.question("Enter the 5th number: "));
let lastNumber = Number(rlSync.question("Enter the last number: "));

function numberComparison() {
  let compareArr = [number1, number2, number3, number4, number5];

  if (compareArr.includes(lastNumber)) {
    console.log(`The number ${lastNumber} appears in ${number1},${number2},${number3},${number4},${number5}.`);
  } else {
    console.log(`The number ${lastNumber} does not appear in ${number1},${number2},${number3},${number4},${number5}.`);
  }
}

numberComparison();

/*
Input: number
Output: string
Rules:
-

Data Structure:
- Array

Algorithm:
  numberComparison
  ================
  - grab user input
  - put user input into an array
  - check to see if last input number is in the array
    - conditional logic stating whether it "appears" or "does not appear"



Edge Cases:
1. Boundaries  ->
2. Data Type   ->
3. Duplication ->
4. Repetition   ->
5. Emptiness   ->

Clarifying Questions?
1.
*/
