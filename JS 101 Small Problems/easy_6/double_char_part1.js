/*
Write a function that takes a string, doubles every character in the string, and
returns the result as a new string.
*/


function repeater(string) {
  let resultString = "";

  if (string.length === 0) return "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    resultString += letter;
    resultString += letter;
  }

  return resultString;
}


console.log(repeater("Hello"));        // "HHeelllloo"
console.log(repeater("Good job!"));    // "GGoooodd  jjoobb!!"
console.log(repeater(""));             // ""

/*
Input: string Output: string with every character doubled in the string Rules:
  - double every character in the string

Algorithm:

High Level
- A function that takes a string as input and doubles the character amount of
  each character in the string

Low Level
- takes a string as argument
- have an empty string stored to a variable called resultString
- if string is empty, return an empty string
- iterate through each character in the string push that times 2 to the resultString
- return resultString

Clarifying Questions?
1.
*/
