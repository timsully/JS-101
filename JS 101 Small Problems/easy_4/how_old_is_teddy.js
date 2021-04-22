/*
Build a program that randomly generates Teddy's age, and logs it to the console.
Have the age be a random number between 20 and 120 (inclusive).

Example Output:
Teddy is 69 years old!
*/

function generateTeddysAge(minAge, maxAge) {
  let teddysAge = Math.floor(Math.random() * (maxAge - minAge) + minAge);
  console.log(`Teddy is ${teddysAge} years old!`);
}

generateTeddysAge(20, 120);

/*
Input: no input
Output: string
Rules:
  - generate a number between 20 - 120 inclusive


Algorithm:
  generateTeddysAge
  =================
  - store a random number to a variable
  - log that to the console `Teddy is ${age} years old!`

*/
