/*
Write a function that combines two arrays passed as arguments, and returns a new
array that contains all elements from both array arguments, with each element
taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same
number of elements.
*/



function interleave(arr1, arr2) {
  let combinedArray = [];

  for (let i = 0; i < arr1.length; i++) {
    combinedArray.push(arr1[i], arr2[i]);
  }

  return combinedArray;
}



interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
console.log(interleave([1, 2, 3], ["a", "b", "c"]));



/*
Input: two arrays passed as arguments
Output: array that contains all elements from both array arguments
Rules:
	- each array's element is alternated in the returned array
    - example: [arr1[e], arr2[e], arr[e], arr2[e]]

Data Structure:
Array

Algorithm:
interleave
==========
- takes two arrays as arguments
- create combined array
- for loop to iterate through length of the array
  - push the index of array1
  - push the index of array2
- return combined array
*/
