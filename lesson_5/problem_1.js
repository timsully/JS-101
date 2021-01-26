/*
How would you order the following array of number strings by descending numeric value (largest number value to smallest)?
*/
let arr = ["10", "11", "9", "7", "8"];

arr.sort((a, b) => a - b); // ascending order
arr.sort((a, b) => b - a); // descending order

/*
Important thing to understand is that strings are compared character by character, so 11 is less than 7. To compare the strings as numbers, we need to convert them to numbers within the callback. Second, the array must be sorted in reverse order.
*/
