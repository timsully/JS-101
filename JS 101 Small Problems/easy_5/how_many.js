/*
Write a function that counts the number of occurrences of each element in a
given array. Once counted, log each element alongside the number of occurrences.
Consider the words case sensitive e.g. ("suv" !== "SUV").
*/
let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "motorcycle",
  "car",
  "truck",
];

function countOccurrences(array) {
  let resultObj = {};

  for (let i = 0; i < array.length; i++) {
    if (resultObj[array[i]] === undefined) {
      resultObj[array[i]] = 1;
    }
    resultObj[array[i]] += 1;
  }

  for (let key in resultObj) {
    console.log(`${key} => ${resultObj[key]}`);
  }
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
