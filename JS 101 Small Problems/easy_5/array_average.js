/*
Write a function that takes one argument, an array of integers, and returns the
average of all the integers in the array, rounded down to the integer component
of the average. The array will never be empty, and the numbers will always be
positive integers.
*/

function average(array) {
  let sum = 0;
  let length = array.length;

  for (let i = 0; i < array.length; i++) {
    sum = array[i] + sum;
  }

  let average = Math.floor(sum / length);

  return average;
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

/*
Input: an array of integers Output: return average of all integers in the array
Rules:
  - array is never empty
  - numbers are always positive

Data Structure:

Array

Algorithm:

High Level
- a function that takes an array of integers as an argument and identifies the
  average of all numbers in the array and returns the average

average
=======
- takes an array of integers
- a sum variable to accumulate the sum
- a length variable to grab the length of the array (how many numbers are in the array)
- for loop through array
  - add array[i] to sum (sum = array[i] + sum)
- get average by sum / length
- return average rounded down
*/
