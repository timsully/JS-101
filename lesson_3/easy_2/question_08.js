/*
How would you check whether the objects assigned to variables numbers and table below are arrays?
*/
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

function isArray(type) {
  if (Array.isArray(type) === true) {
    console.log("true");
  } else {
    console.log("false");
  }
}

isArray(numbers);

Array.isArray(numbers); // => true
Array.isArray(table);   // => false
