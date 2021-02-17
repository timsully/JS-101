/*
Write a function that takes a string argument and returns a new string that contains the
value of the original string with all consecutive duplicate characters collapsed into a
single character.
*/

function crunch(string) {
  let trimmedArr = [];
  let arrString = string.split('');
  
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i] !== arrString[i + 1]) {
      trimmedArr.push(arrString[i]);
    }
  }
  
  let result = trimmedArr.join('');
  
  return result;
}

// solution for not consecutive duplicate characters
function crunch(string) {
  let trimmedArr = [];
  let arrString = string.split('');

  for (let i = 0; i < arrString.length; i++) {
    if (!trimmedArr.includes(arrString[i])) {
      trimmedArr.push(arrString[i]);
    } else if (trimmedArr.includes(arrString[i])) {
      continue;
    } else {
      return "";
    }
  }

  let result = trimmedArr.join('');

  return result;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

/*
Input: takes a string argument

Output: returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character

Rules:
Explicit requirements:
Implicit requirements:
Algorithm:
  crunch function
  ===============
  - function takes in a string argument
  - assign variable labeled arrString to split string to return an array of substrings
  - loop over the array of substrings (arrString)
    - if character doesn't exist in trimmedArr, add it into trimmedArr
    - if character exists in trimmedArr, don't add it into trimmedArr
  - use the .join() method to concatenate all elements in the trimmedArr as a string, assign to a variable labeled result
  - return result
*/
