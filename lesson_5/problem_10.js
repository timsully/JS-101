/*
Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.
*/
let arr = [
  ["b", "c", "a"],
  [2, 1, 3],
  ["blue", "black", "green"],
];

arr.map((subArr) => {
  if (typeof subArr[0] === "string") {
    return subArr.slice().sort().reverse();
  } else {
    // this is for the evaluation of numbers, a callback function is needed; otherwise,
    // numbers will be sorted by their UTF-16 character values
    return subArr.slice().sort((a, b) => b - a);
  }
});
