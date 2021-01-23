// The following code differs slightly from the above code.
// What is the return value of map in this case? Why?

[1, 2, 3].map((num) => num * num);

/*
[1, 4, 9]

Without braces surrounding the body of the arrow function, JavaScript uses the computed value as the return value. In this case, the callback returns `1`, `2`, and `9` on the 3 iterations.
*/
