// Add up all of the ages from the Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let arrayOfNums = Object.values(ages);

arrayOfNums.reduce(function(acc, cv) {
  return sum = acc + cv;
})

console.log(`Sum = ${sum}`);

// or

Object.values(ages).forEach(age => totalAges += age);
