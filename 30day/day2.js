let a, b,c;
a = 5;
b=6;
c = a+b;
console.log(typeof(c));
console.log(a-b);
console.log(a*b);
console.log(5/2);
console.log(2+2);

console.log(5%2);

let my_num = 10;
my_num+=1;
console.log(my_num);
my_num-=1;
console.log(my_num)


let age = 17;
let age2=24;
console.log(age>age2); //False
console.log(age<age2); //True

let num1 = 5;
let num2 = 10;

if(num1>=num2){
    console.log(`${num1} is grater than equal to ${num2}`)
}
else{
    console.log(`${num2} is grater than ${num1}`)
}


let num3 = '10';
let num4 = 10;

// Compare using ==
if (num3 == num4) {
    console.log(`${num3} is equal to ${num4} using ==`);
} else {
    console.log(`${num3} is not equal to ${num4} using ==`);
}

// Compare using ===
if (num3 === num4) {
    console.log(`${num3} is equal to ${num4} using ===`);
} else {
    console.log(`${num3} is not equal to ${num4} using ===`);
}


let aage = 25;
let hasID = false;

// Check if the person is 18 or older AND has an ID
if (aage >= 18 && hasID) {
    console.log("You are allowed to enter.");
} else {
    console.log("You are not allowed to enter.");
}


if (aage >= 18 || hasID) {
    console.log("You are allowed to enter. but dont have ");
} else {
    console.log("You are not allowed to enter.");
}


rain = true;

if(!rain){
    console.log("not rain")
}
else{
    console.log("rain")
}


number1=-10;

let m = (number1 >= 0) ? "the number is positive": "the number is negative";

console.log(m)
