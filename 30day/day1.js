var number=45;
console.log(`price is ${number}`)

let str = "vaibhav here";
console.log(str)

let my = 34;
my = String(my)
console.log(typeof(my))

const test1 = true;
const test2 = false;
console.log(`test1 ${test1}`)
console.log(`test2 ${test2}`)

//Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let num = 12;
let strings= "vaibhav";
let bool = true;
let oob = {name:"raj"};
let arr = [1,2,3,4];  // "object" (Arrays are considered objects in JavaScript)

console.log(typeof(num))
console.log(typeof(strings))
console.log(typeof(bool))
console.log(typeof(oob))
console.log(typeof(arr))


let name = 500;
console.log(name)
name = 300;
console.log(name)

// const not = 400;
// not = 300;

// console.log(not) throw error


//using let reassigning value allowed
let variableLet = 10
console.log(`this is original value ${variableLet}`)

variableLet = 20
console.log(`this is chnage value ${variableLet }`)
//using const reassigning value not allowed
const variableConst = 30;
console.log("Initial value of const:", variableConst); 

// Attempting to reassign a const variable will throw an error
try {
    variableConst = 40; // This will cause an error
} catch (error) {
    console.error("Error when trying to reassign const:", error.message); // Output: Assignment to constant variable.
}




