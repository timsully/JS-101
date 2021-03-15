/*
A double number is an even-length number whose left-side digits are exactly the same as its
right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas
444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless
the argument is a double number; return double numbers as-is.
*/


/*
Input: positive integer as argument
Output: argument multiplied by two unles its a double number
Rules:
  - is an even length number
  - left side digits are the exact same as its right-side digits
Explicit requirements:
Implicit requirements:

Data Structure:
- 

Algorithm:
  function twice
  ==============
  - function that takes in a number as an argument
  - if the argument is a double number return it as is
    - if num[i] === num[i] + 1 && num.length === 2
  - else return the number provided as an argument multiplied by two
  - 


  High Level
    - 

  Specifics
    - 


Edge Cases:
1. Boundaries  -> 
2. Data Type   -> 
3. Duplication -> 
4. Repetition   -> 
5. Emptiness   -> 

Clarifying Questions?
1. Do we need regex to recognize this pattern?
2. Can an even number digits passed in as the argument be split in half?
*/


function twice(num) {
 if (isDoubleNumber(number)) {
   return number;
 } else {
   return number * 2;
 }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
