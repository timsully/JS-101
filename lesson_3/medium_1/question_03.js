/*
Alan wrote the following function, which was intended to return all of the factors of number:

Bonus: What is the purpose of number % divisor === 0 in that code?
Any argument passed into the `number` parameter that is divisible by itself and evaluates to zero and does not have a remainder.

Launch School Answer:
It determines whether the result of the division is an integer -- if the number has no remainder, the result is an integer, so the number divided by the divisor is a factor.
*/
function factors(number) {
  let divisor = number;
  let factors = [];
    while (divisor > 0) {
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
      divisor -= 1;
    }
  return factors;
}

console.log(factors(4));
