/*
Given the following data structure, return a new array with the same structure, but with the subarrays ordered -- alphabetically or numerically as appropriate -- in ascending order.
*/
let arr = [
  ["b", "c", "a"],
  [2, 1, 3],
  ["blue", "black", "green"],
];

arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort();
  } else {
    // this is for the evaluation of numbers, a callback function is needed; otherwise,
    // numbers will be sorted by their UTF-16 character values
    return subArr.slice().sort((a, b) => a - b);
  }
});
