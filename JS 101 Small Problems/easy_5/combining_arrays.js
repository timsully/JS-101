/*
Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.
*/

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {
  let newArr = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

/*
Input: two arrays
Output: on array with no duplicates in ascending order
Rules:
  - no duplication of values in the returned array
  - both arguments are arrays

Explicit requirements:
Implicit requirements:

Data Structure:
Array

Algorithm:
union
=====
- takes two arrays as input
- flattens both arrays into one
- sort the array in numeric ascending order
- iterates to see if there are any duplicates
  - if there is a duplicate pop it off the array
- return new array


Edge Cases:
1. Boundaries  ->
2. Data Type   ->
3. Duplication ->
4. Repetition   ->
5. Emptiness   ->

Clarifying Questions?
1.
*/
