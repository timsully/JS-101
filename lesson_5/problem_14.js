/*
Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.
*/
let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

let array = [];

for (const key of Object.keys(obj)) {
  if (obj[key].type === "fruit") {
    array.push(obj[key].colors.map(c => {
      return c[0].toUpperCase() + c.slice(1);
    }));
  } else if (obj[key].type === "vegetable") {
    array.push(obj[key].size.toUpperCase());
  }
  console.log(array);
}



// Expected return value
// => [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
