/*
Write a function that returns true if its integer argument is palindromic, or
false otherwise. A palindromic number reads the same forwards and backwards.

Examples:
*/

function isPalindromicNumber(num) {
  let str = String(num);
  let reversedStr = str.split('').reverse().join('');

  if (str === reversedStr) {
    return true;
  }

  return false;
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
