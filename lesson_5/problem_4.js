// For each of these collection objects, demonstrate how you would change the value 3 to 4.

let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;

let obj1 = { first: [1, 2, [3]] };
// obj1.first[2] = 4;

let obj2 = { a: { a: ["1", "two", 3], b: 4 }, b: 5 };
// Object.values(obj2)[0].a[2] = 4;
// obj2.a.[2] = 4;
