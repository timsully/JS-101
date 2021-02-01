/*
Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
*/
let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

function sum(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    console.log(`Total: ${total}`);
    if (array[i] % 2 === 1) {
      total += array[i];
      console.log(`Add to total: ${array[i]}`);
    } else {
      console.log(`Skipped over: ${array[i]}`);
    }
  }
  console.log(`Final total for array indexed at 0: ${total}`);
  return total;
}

console.log(`Arr before: ${JSON.stringify(arr)}`);

arr.sort((a1, a2) => {
  return sum(a1) - sum(a2);
})

console.log(`Arr after: ${JSON.stringify(arr)}`);
