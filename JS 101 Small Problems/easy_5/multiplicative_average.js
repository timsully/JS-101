/*
Write a function that takes an array of integers as input, multiplies all of the
integers together, divides the result by the number of entries in the array, and
returns the result as a string with the value rounded to three decimal places.
*/


function multiplicativeAverage(array) {
  let multSumFunc = (acc, cv) => acc * cv;
  let sumOfNums = array.reduce(multSumFunc);

  let arrLength = array.length;

  let finalSum = sumOfNums / arrLength;

  let finalSumStr = finalSum.toFixed(3);

  return finalSumStr;
}


multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));
/*
Input: array of integers
Output: string
Rules:
	- takes an integer of arrays
  - multiplies all of the numbers in the array together
  - return result as a string rounded to three decimal places

Data Structure:
String

Algorithm:
multiplicativeAverage
=====================
- takes an array of ints as an argument
- multiply all integers together into a `result` variable
- grab length of arr as a number and store to variable arrLength
- divide the result by number of elements in array and store value to a variable finalSum
- round the value of finalSum to three decimal places
- convert finalSum to a string and store to finalSumStr
- return finalSumStr

Clarifying Questions?
1.
*/
