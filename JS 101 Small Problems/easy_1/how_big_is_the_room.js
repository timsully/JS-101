/*
Build a program that asks the user to enter the length and width of a
room in meters, and then logs the area of the room to the console in both
square meters and square feet.
*/
let rlSync = require("readline-sync");

const squareMeter = 10.7639;

console.log("Enter the length of the room in meters:");
let length = rlSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = rlSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * squareMeter);

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet.)`);
