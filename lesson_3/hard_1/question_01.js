// Will the following functions return the same results?
function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());

// function first() will return the object, but second() will returns undefined and does not evaluate the object on the line below it. So they do not return the same thing.
