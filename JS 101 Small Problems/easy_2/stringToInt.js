function stringToInteger(str) {
  let zeroes = 10 ** (str.length - 1);

  let int = 0;
  str.split("").forEach((char) => {
    int += char * zeroes;
    zeroes /= 10;
  });

  return int;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
