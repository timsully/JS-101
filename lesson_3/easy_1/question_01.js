// Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4]; // Uncaught ReferenceError: number is not defined

// > numbers
// [ 1, 2, 3, <3 empty items>, 5 ] - JS engine will treat array slots 3 through 5 as empty slots.
