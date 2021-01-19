/*
Suppose we build an array like this:
Create a new array that contains all of the above values, but in an un-nested format:
[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
*/
let flintstones = ["Fred", "Wilma"];
let arr1 = ["Barney", "Betty"];
let arr2 = ["Bambam", "Pebbles"];
let arrMain = arr1.concat(arr2);
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

console.log(flintstones.concat(arr1, arr2));

console.log(flintstones.concat(...arrMain));

// Solution with .reduce
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
});

// Solution with .forEach
let newFlintstones = [];

flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});
