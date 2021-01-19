/*
Starting with the string:
Return a new string that swaps the case of all of the letters:
=> `tHE mUNSTERS ARE CREEPY AND SPOOKY.`
*/
let munstersDescription = "The Munsters are creepy and spooky.";

munstersDescription
  .split("")
  .map(function (char) {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  })
  .join("");
