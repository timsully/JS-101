/*
Modify the wordSizes function from the previous exercise to exclude non-letters
when determining word size. For instance, the word size of "it's" is 3, not 4.

Examples:
*/
// const ALPHA = "abcdefghijklmnopqrstuvwxyz";

// function wordSizes(str) {
//   let arr = str.toLowerCase().split(' ');
//   let newArr = [];

//   arr.forEach((elem) => {
//     newArr.push(elem.split('').filter(char => ALPHA.includes(char)).join(''));
//   });

//   let sizes = {};

//   newArr.forEach((word) => {
//     if (word.length > 0) {
//       if (sizes[word.length]) {
//         sizes[word.length] += 1;
//       } else {
//         sizes[word.length] = 1;
//       }
//     }
//   });

//   return sizes;
// }


function wordSizes(words) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let cleanWordSize = removeNonLetters(wordsArray[idx].toLowerCase()).length;

    if (cleanWordSize === 0) { continue; }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }

  return count;
}

function removeNonLetters(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}
