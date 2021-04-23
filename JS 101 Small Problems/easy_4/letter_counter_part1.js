/*
Write a function that takes a string consisting of zero or more space separated
words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Examples:
*/

function wordSizes(str) {
  if (str.length === 0) return {};

  let wordArr = str.split(" ");
  // let lengthArr = wordArr.map((elem) => {
  //   return elem.length;
  // });

  let counts = {};

  for (let word of wordArr) {
    if (counts.hasOwnProperty(word.length)) {
      counts[word.length]++;
    } else {
      counts[word.length] = 1;
    }
  }

  return counts;
}

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(""));

/*
  Problem
  input: string
  output: object
  rules: output object must contain count of word lengths from the input string. if empty string is given, return an empty object
  assumptions: input will always be a string. punctuation is part of a word

  Algorithm
  - if input is length 0, return empty object
  - split the input string into an array by spaces
  - map the array to another array containing only the lengths of the words
  - create an empty object to hold length counts
  - iterate over the word-length array and add each one to the object. if it's already in the object, increment the count by 1
  - return the object
*/
