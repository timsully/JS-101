/*
Write a function that calculates and returns the index of the first Fibonacci
number that has the number of digits specified by the argument. (The first
Fibonacci number has an index of 1.)
*/
function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 2n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}
