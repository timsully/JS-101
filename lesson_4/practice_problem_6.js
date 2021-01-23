/*
How does Array.prototype.fill work? Is it destructive? How can we find out?
*/
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

// [ 1, 1, 1, 1, 1 ]
// Destructive method, read the MDN docs.
