// spred operator = ... allows an iterable such as an array or string to be expanded into seprate elemtns
// (unpack the elements)

let number = [1, 2, 3, 4, 5, 6, 123];
let Names = "vaibhav raj";
let fruits = ["apple", "orange", "banana"];
let places = ["dbg", "delhi", "goa"];

let Max = Math.max(...number);
let Min = Math.min(...number);
let letters = [...Names];
let combined = [...fruits, ...places, "raj"];

// console.log(Max);
// console.log(Min);
// console.log(letters);
console.log(typeof combined);
