/*
Log all even numbers from 1 to 99, inclusive, to the console,
with each number on a separate line.
*/
let i = 0;
while (i <= 97) {
  i += 2;
  console.log(i);
}

// or

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}
