/*
Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.
*/
function multisum(num) {
  let bucket = [];
  
  for (let i = 0; i < num; i++) {
    bucket.push(i);
  }

  console.log(bucket);

  let mult3 = bucket.filter(i => i % 3 === 0);
  console.log(mult3);

  let mult5 = bucket.filter(i => i % 5 === 0);
  console.log(mult5);
  
  let multiples = mult3.concat(mult5);

  console.log(multiples);

  // mult3.reduce(function(acc, cv) {
  //   // return acc + cv;
  //   console.log(acc + cv);
  // })
}

multisum(20);       // 98
// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168
