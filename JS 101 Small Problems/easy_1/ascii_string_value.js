/*
Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)
*/

// the sum of the ASCII values of every character in the string
function asciiValue(string) {
  let charCodeSum = 0;
  let arr = string.split(/(?!$)/u);

  if (string === '') return 0;

  let charCodeArr = arr.map(i => i.charCodeAt());
  let totalCharCodeSum = charCodeArr.reduce((acc, cv) => acc + cv);

  return totalCharCodeSum;
}

// or
// function asciiValue(string) {
//   let sum = 0;

//   for (let idx = 0; idx < string.length; idx += 1) {
//     sum += string.charCodeAt(idx);
//   }

//   return sum;
// }

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
