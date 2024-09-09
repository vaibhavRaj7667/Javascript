
// let age = 18;

// let Name = `vaibhav`;
// let couse=`BCA`;
// let roll = 132;
// let age = 19;

// document.getElementById("p1").textContent=`your name is ${Name}`;
// document.getElementById("p2").textContent=`your are ${age} year old`;
// document.getElementById("p3").textContent=roll;
// ----------------------------------------------

// let student = 30;

// //student = student ** 6;
// //student = student / 2;
// //student++;
// //student--;

// console.log(student)
//----------------------------- user input

// let usernmae;
// usernmae = window.prompt("whats your name")
// console.log(usernmae)

// let username;
// document.getElementById("button").onclick = function(){
//     username = document.getElementById("name").value;
//     console.log(username);
//     document.getElementById("head").textContent=`hello ${username}`
// }
//----------------------------type conserversion

// let age = window.prompt("what you age");
// age = Number(age);
// console.log(age);
// console.log(typeof age);

 //----------------------const

// let pi = 3.14
// let radius;
// let circum; 

// document.getElementById("button").onclick=function(){
//     radius = document.getElementById("text").value;
//     circum = 2 * pi * radius
//     document.getElementById("h1").textContent=circum

// }
//-------------------------------- countre program

// const dec = document.getElementById("decresasebtn");
// const rest = document.getElementById("reset");
// const inc = document.getElementById("increasevbtn");

// const contlabel = document.getElementById("countlabel");

// let count = 0;

// inc.onclick= function()
// {
//     count++;
//     contlabel.textContent = count;

// }
// dec.onclick= function()
// {
//     count--;
//     contlabel.textContent = count;

// }
// rest.onclick= function()
// {
//     count=0;
//     contlabel.textContent = count;

// }

//--------------------------random number genarotor


// let randomnum = Math.floor(Math.random()*6)+1;

// console.log(randomnum);

// const myclick = document.getElementById("random");
// const mylabel = document.getElementById("mylabel")
// let randomnum;


// myclick.onclick = function(){
//     randomnum = Math.floor(Math.random()*6)+1;
//     mylabel.textContent = randomnum;
// }
//------------------- if else statements

// const ageInput = document.getElementById("age");
// const checkButton = document.getElementById("button");

// checkButton.onclick = function() {
//     const ageValue = parseInt(ageInput.value);  // Get the value of the input field and convert it to a number
    
//     if (isNaN(ageValue)) {  // Check if the input is not a number
//         document.getElementById("answer").textContent = "Please enter a valid age.";
//     } else if (ageValue >= 18) {
//         document.getElementById("answer").textContent = "You are an adult.";
//     } else {
//         document.getElementById("answer").textContent = "You are a child.";
//     }
// }

let age = 25  ;
if(age >= 18){
    console.log("you are adult")
}

console.log("this is test commit")