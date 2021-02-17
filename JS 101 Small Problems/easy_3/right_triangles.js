/*
Write a function that takes a positive integer, n, as an argument, and logs
a right triangle whose sides each have n stars. The hypotenuse of the triangle
(the diagnol side in the images below) should have one end at the lower-left of
triangle, and the other end at the upper-right.
*/

/*
Input: a positive integer 'n' as an argument
Output: logs a right triangle whose sides each have n stars
Rules:
  - each side will have n stars logged
Explicit requirements:
Implicit requirements:


Data Structure:
- Array

Algorithm:
  function triangle
  =================
  - function triangle takes positive integer as an argument
  - set an emptyArr
  - write a for loop
    - iterate through the length of the positive integer passed in
    - for each iteration push(' ') to emptyArr
  - turn array into a string with emptyArr.join("") and assign it to emptyStr variable
  - write a for loop to replace each character one by one with asterisk
    - log the emptyStr with characters in reverse
    - re-assign empyStr var with each new charater being added until the length of emptyStr


Edge Cases:
1. Boundaries  -> positive integer
2. Data Type   -> 
3. Duplication -> 
4. Repetition  -> 
5. Emptiness   -> 

Clarifying Questions?
1. What do they exactly mean by, "logs a right triangle whose sides each have 'n' stars"?
2. What is the hypotenuse of a triangle?
3. How do I incrementally replace the inital string
*/


function triangle(int) {
  let emptyArr = [];
  
  for (let i = 0; i <= int; i++) {
    emptyArr.push(' ');
  }

  let emptyStr = emptyArr.join("");

  for (let i = 0; i < emptyStr.length; i++) {
    console.log(emptyStr.split("").reverse().join(""));
    emptyStr = emptyStr.replace(emptyStr[i], "*");
  }
}

triangle(5);
triangle(9);

/*

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

*/
