/*
Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.
*/
let rlSync = require("readline-sync");

function arithmeticInt(num1, num2) {
  let addOp = Number(num1) + Number(num2);
  let minusOp = num1 - num2;
  let multOp = num1 * num2;
  let divOp = num1 / num2;
  let remainderOp = num1 % num2;
  let powerOp = num1 ** num2;

  console.log(`==> ${num1} + ${num2} = ${addOp}`);
  console.log(`==> ${num1} - ${num2} = ${minusOp}`);
  console.log(`==> ${num1} * ${num2} = ${multOp}`);
  console.log(`==> ${num1} / ${num2} = ${divOp}`);
  console.log(`==> ${num1} % ${num2} = ${remainderOp}`);
  console.log(`==> ${num1} ** ${num2} = ${powerOp}`);
}

console.log("==> Enter the first number:");
let firstNum = rlSync.prompt();

console.log("==> Enter the second number:");
let secNum = rlSync.prompt();

arithmeticInt(firstNum, secNum);
