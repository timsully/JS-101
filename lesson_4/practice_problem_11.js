/*
Create an object that expresses the frequency with which each letter occurs in this string:
The output will look something like the following:
{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }
*/
let statement = "The Flintstones Rock";

let charsInStatement = statement.split("").filter((char) => char !== " ");
let result = {};

charsInStatement.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});
