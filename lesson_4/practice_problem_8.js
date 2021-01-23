/*
Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:
*/
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

flintstonesObj;
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
