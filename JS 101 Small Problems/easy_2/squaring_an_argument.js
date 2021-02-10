/*
Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).
*/

function multiply(n1, n2) {
  return n1 * n2;
}

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
