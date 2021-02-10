/*
Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.
*/

function greetings(arr, obj) {
  let arrNameJoined = "";
  let objValues = Object.values(obj).join(' ');

  if (arr.length >= 1) {
    let concatArr = arr.join(" ");
    arrNameJoined += concatArr;
  } else {
    let singleStrArr = arr.join('');
    arrNameJoined += singleStrArr;
  }

  return `Hello, ${arrNameJoined}! Nice to have a ${objValues} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

// logs Hello, John Q Doe! Nice to have a Master Plumber around.
