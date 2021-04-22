/*
Build a program that logs when the user will retire and how many more years the
user has to work until retirement.

Example:

What is your age? 30 At what age would you like to retire? 70

It's 2017. You will retire in 2057. You have only 40 years of work to go!
*/
let rlSync = require("readline-sync");

let age = Number(rlSync.question("What is your age? "));
let retirementAge = Number(rlSync.question("At what age would you like to retire? "));

let yearsOfWorkRemaining = retirementAge - age;
let today = new Date();
let currentYear = today.getFullYear();
let yearOfRetirement = currentYear + yearsOfWorkRemaining;

console.log(`It's ${currentYear}. You will retire in ${yearOfRetirement}`);
console.log(`You only have ${yearsOfWorkRemaining} years of work to go!`);

/*
Input: number
Output: string
Rules:

Explicit requirements:
Implicit requirements:

Data Structure:

Algorithm:
  - grab age from user
  - grab retirement age
  - add currentYear + yearsTilRetirement
  - State how many years are left

Edge Cases:
1. Boundaries  ->
2. Data Type   ->
3. Duplication ->
4. Repetition   ->
5. Emptiness   ->

Clarifying Questions?
1.
*/
