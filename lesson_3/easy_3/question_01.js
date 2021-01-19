/*
Write three different ways to remove all of the elements from the following array:
*/
let numbers = [1, 2, 3, 4];

for (let i = 0; i <= numbers.length; i++) {
  numbers.pop(i);
}

while (true) {
  if (numbers.length === 0) {
    console.log("Array is empty");
    break;
  } else {
    numbers.shift();
  }
  console.log(`${numbers}`);
}

numbers.splice(0, 4);
