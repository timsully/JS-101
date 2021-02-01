/*
Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.
*/
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// let arrTwo = arr.map(arrOfNum => {
//   let bucket = [];
//   for (let i = 0; i < arrOfNum.length; i++) {
//     if (arrOfNum[i] % 3 === 0) {
//       bucket.push(arrOfNum[i]);
//     }
//   }
//   return bucket;
// });

// console.log(arrTwo);

// or 

let arr2 = arr.map((inner) => {
  return inner.filter((num) => num % 3 === 0);
});
