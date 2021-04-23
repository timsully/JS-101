/*
Write a function that returns true if the string passed as an argument is a
palindrome, or false otherwise. A palindrome reads the same forwards and
backwards. For this problem, the case matters and all characters matter.
*/

function isPalindrome(str) {
  if (str === str.split('').reverse().join('')) {
    return true;
  }

  return false;
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

/*
Input: string
Output: boolean
Rules:
  -
Explicit requirements:
Implicit requirements:

Data Structure:

Algorithm:
  isPalindrome
  ============
  - takes string as argument
  - checks to see if it looks the same in reverse
    - if true, return true
  -
*/
