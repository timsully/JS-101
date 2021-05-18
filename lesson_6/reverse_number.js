/*
Write a function that takes a positive integer as an argument and returns that
number with its digits reversed.
*/


function reverseNumber(num) {
  let numberStringArray = String(num).split('');
  let reversedStringedNum = numberStringArray.reverse().join('');
  return parseInt(reversedStringedNum, 10);
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1


/*
Input: number
Output: number in reverse
Rules:
- if one number is passed in, return it
- leading zeros get dropped

Algorithm:
reverseNumber
=============
- pass in number as an argument
-

Clarifying Questions?
1.
*/
