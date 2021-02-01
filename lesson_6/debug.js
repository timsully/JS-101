let arr = [1, 2, 3, 4];

let squares = arr.map(num => squares(num));

function squares(v) {
  return v * v;
}

console.log(squares);
