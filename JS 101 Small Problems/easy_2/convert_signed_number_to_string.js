/*
Write a function that takes an integer, and converts it to a string representation.
Add the ability to represent negative numbers as well.
*/

function signedIntegerToString(num) {
  let array = [];

  if (Math.sign(num) === -1) {
    array.push(num);
    return array.join("");
  } else if (Math.sign(num) === 1) {
    array.push(num);
    array.unshift("+");
    return array.join("");
  } else {
    return "0";
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

/*
Input: positive or negative number
Output:
Rules:
Explicit requirements:
Implicit requirements:
Algorithm:
  integerToString function
  ========================
  - function takes in a string as an argument
  - use conditional logic to see if the parameter labeled num is positive or negative
    - if it is positive, add a '+' character to beginning of string
    - if it is negative, add a '-' character to beginning of string
    - else return the string 0
  - return result
*/
