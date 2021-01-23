/*
What is the return value of map in the following code? Why?
*/
["ant", "bear"].map((elem) => {
  if (elem.length > 3) {
    return elem;
  }
});

/*
[ undefined, 'bear' ]

When a function doesn't explicitly return something, it implicitly returns undefined. That's why we see undefined as the first element of the returned array.
*/
