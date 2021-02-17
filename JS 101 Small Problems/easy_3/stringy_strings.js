/*
Write a function that takes one argument, a positive integer, and returns a
string of alternating '1's and '0's, always starting with a '1'. The length
of the string should match the given integer.
*/

/*
Input: a positive integer as the argument
Output: returns a string of alternating 1's and 0's
Rules:
  - alternating 1's and 0's always starts with 1
  - the string ouput should be the same amount of characters as the number passed in
Explicit requirements:
Implicit requirements:
Algorithm:

function stringy
================
  - stringy function takes in a positive integer
  - create an empty string and assign it to var newStr
  - use a for loop to iterate to the length of the integer passed in as an argument
    - if index number is odd then add a 1 to newStr
    - if index number is even then add 0 to newStr
  - return newStr
*/

function stringy(int) {
  let result = "";
  for (let i = 0; i < int; i++) {
    let number = ((i % 2) === 0) ? "1" : "0";
    result += number;
  }
  return result;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
