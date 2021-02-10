/*
Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.
*/
let rlSync = require("readline-sync");

function yells(string) {
  let strUpperCase = string.toUpperCase();
  return `HELLO ${strUpperCase}. WHY ARE WE SCREAMING?`;
}

function noYelling(string) {
  return `Hello ${string}.`;
}

console.log("What is your name? ");
let name = rlSync.prompt();

let result = name.includes("!") ? yells(name) : noYelling(name);
console.log(result);
