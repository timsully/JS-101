/*
Write a function that takes two array arguments, each containing a list of
numbers, and returns a new array that contains the product of each pair of
numbers from the arguments that have the same index. You may assume that the
arguments contain the same number of elements.
*/

// My Approach
function multiplyList(arr1, arr2) {
  let resultArray = [];

  let value1 = arr1[0] * arr2[0];
  let value2 = arr1[1] * arr2[1];
  let value3 = arr1[2] * arr2[2];

  resultArray.push(value1, value2, value3);

  return resultArray;
}

// Better Approach
function multiplyList(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] * arr2[i]);
  }
  return result;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

/*
Input: two array arguments
Output: one array
Rules:
- the returned array contains the product of each pair of numbers from the
  arguments that have the same index.
- each pair of numbers is multiplied
- arguments contain the same number of elements


Data Structure:
Array


Algorithm:
multiplyList
============
- takes two arguments which are arrays
- create an empty array to store results
- multiply each index by each other and store result in resultArray
- return result
*/
