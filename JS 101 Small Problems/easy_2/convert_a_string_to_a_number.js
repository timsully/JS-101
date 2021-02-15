/*
Write a function that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the methods mentioned above. You may not use any of the standard conversion methods available in JavaScript, such as String() and Number().
*/

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  // for every key that is represented as a string in the DIGITS object
  // return its value in the new array. A new array is the return value of the
  // map method. All of this is assigned to the arrayOfDigits variable.
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  // using the forEach method on the arrayOfDigits to multiply the current
  // number assigned to the value variable and multiply it by 10 and then add
  // digit which is the index(element) in the array and assign that to the value
  // variable in each iteration
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
