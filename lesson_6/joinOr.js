/*
Suppose we want to separate the last item with "or" so that it reads:
=> Choose a square: 1, 2, 3, 4, 5, 6, 7, 8, or 9

Display a joining word for the last element.

Write a function named joinOr that produces the following results:
*/

function joinOr(arr, joinOn = ", ", delimiter = "or") {
  if (arr.length === 0) {
    return "";
  }
  if (arr.length === 1) {
    return "" + arr[0];
  }
  return (
    arr
      .slice(0, arr.length - 1)
      .map((num) => String(num))
      .join(joinOn) + `${joinOn}${delimiter} ` + arr[arr.length - 1]
  );
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"
