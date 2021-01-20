/*
// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []
*/

/*
My Answer:

input: string
output: array that's empty when no palindrome and returns an array with each palindrome as an element within the array
rules:
  Explicit requirements:
    - returns all substrings from a given string which are palindromes
    - substrings must be palindrome to be returned
    - a function that takes a string
    - case sensitive
  Implicit requirements:
    - logs an empty array if there is no match
    - returns an array with each variation that is a palindrome as its own element in the array
*/

/*
Launch School Answer:
// Some questions you might have?
// 1. What is a substring?
// 2. What is a palindrome?
// 3. Will inputs always be strings?
// 4. What does it mean to treat palindrome words case-sensitively?

// Some questions you might have?
// 1. What is a substring?
// 2. What is a palindrome?
// 3. Will inputs always be strings?
// 4. What does it mean to treat palindrome words case-sensitively?

// input: string
// output: an array of substrings
// rules:
//      Explicit requirements:
//        - return only substrings which are palindromes.
//        - palindrome words should be case sensitive, meaning "abBA"
//          is not a palindrome.

//      Implicit requirements:
//        - if the string is an empty string, the result should be an empty array
*/
