/*
Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.
*/

function penultimate(str) {
  let splitStr = str.split(" ");
  let secLastElem = splitStr[splitStr.length - 2];
  
  if (splitStr.length === 1) {
    console.log("Must contain more than one word in string being passed in.");
    return;
  }
  if (str === "" || " ") {
    console.log("This is an empty string, string must have at least two words.");
    return;
  }

  return secLastElem;
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate(""));
console.log(penultimate(" "));

/*
input: a string
output: the second to last word in the string
rules:
  - words are any sequence of non-blank characters
Explicit requirements:
Implicit requirements:
  - you may assume that the input String will always contain at least two words

Algorithm:
  penultimate function
  ====================
  - start with a function that takes in an argument for a string
  - use split to divide a string into an ordered list of substrings
  - grab the second last string in the array with stringVar[stringVar.length - 2] and store it in a variable to to reuse
  - use the join method to turn it back into a string
  - return variable which is the second last element in the array
*/
