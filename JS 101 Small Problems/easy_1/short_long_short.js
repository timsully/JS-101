/*
Write a function that takes two strings as arguments, determines the longer
of the two strings, and then returns the result of concatenating the shorter
string, the longer string, and the shorter string once again. You may assume
that the strings are of different lengths.
*/
function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    console.log(`${str2}${str1}${str2}`);
  } else if (str2.length > str1.length) {
    console.log(`${str1}${str2}${str1}`);
  } else if (str1 === false) {
    console.log(`${str2}`);
  } else if (str2 === false) {
    console.log(`${str1}`);
  } else {
    console.log(`You're strings are empty!`);
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
shortLongShort('', '');            // "You're strings are empty!"
