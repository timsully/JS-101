/*
We have most of the Munster family in our ages object:
Add entries for Marilyn and Spot to the object:
*/
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

const newObj = Object.assign(ages, additionalAges);
console.log(newObj);
