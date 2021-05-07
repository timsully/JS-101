/*
Write a function that takes one argument, a positive integer, and returns a list
of the digits in the number.
*/

function digitList(num) {
  return Array.from(String(num), Number);
  // return arrOfDigs;
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

/*
Input: number
Output: array of numbers
Rules:
	- takes a positive integer as an argument
  - returns a list of the digits in the number

Data Structure:
Array

Algorithm:
digitList
=========
-

Clarifying Questions?
1.
*/
