/*
Given a string of words separated by spaces, write a function that swaps the
first and last letters of every word.

You may assume that every word contains at least one letter, and that the string
will always contain at least one word. You may also assume that each string
contains nothing but words and spaces, and that there are no leading, trailing,
or repeated spaces.

Examples:
*/

function swap(string) {
  let arrayOfStr = string.split(' ');
  let reversedArray = [];

  for (let i = 0; i < arrayOfStr.length; i++) {
    const str = arrayOfStr[i];

    if (str.length === 1) {
      reversedArray.push(str);
      continue;
    }

    let firstChar = str[0];
    let lastChar = str[str.length - 1];

    let fullSwapped = lastChar + str.slice(1, str.length - 1) + firstChar;
    reversedArray.push(fullSwapped);
  }

  return reversedArray.join(' ');
}

console.log(swap("Oh what a wonderful day it is"));  // "hO thaw a londerfuw yad ti si"
console.log(swap("Abcde"));                          // "ebcdA"
console.log(swap("a"));                              // "a"

/*
Input: a string Output: a string with each words first and last letters reversed
Rules:
- if it is one letter in the string, return that string
-

Assumptions: assume that it's a string passde in every time

Data Structure: Array

Algorithm:

swap
====
- takes a string as an argument
- split the string by spaces and store in array
- iterate through each element in the array
  - nested loop to iterate once more in the array to grab the first index in the
    string and store to variable
  - another variable to store the char of last index
  - re-assign last index with firstChar variable
  - re-assign first index with lastChar variable
- join(' ') the revised array and store in reversedStr variable
- return reversedStr
*/
