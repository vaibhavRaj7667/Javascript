let my_num = 6;
let my_num1 = 7;
function odd(num) {
  if (num % 2 == 0) {
    console.log(`even`);
  } else {
    console.log(`odd`);
  }
}

odd(my_num);

function sqrt(num) {
  console.log(num * num);
}

function large(num1, num2) {
  num1 > num2
    ? console.log(`${num1} is grater`)
    : console.log(`${num2} is greater`);
}

sqrt(my_num);

large(my_num, my_num1);

function concat(str1, str2) {
  console.log(str1 + str2);
}
concat("vaibhav", "raj");

const suum = (a, b) => console.log(a + b);

suum(3, 2);

const containsCharacter = (str, char) => str.includes(char);

console.log(containsCharacter("hello", "e"));
console.log(containsCharacter("world", "x"));

function product(a, b = 1) {
  console.log(a * b);
}

product(3);
product(3, 2);

// higher order functions

const lol = () => console.log("hello");

const fun1 = (fun, numer) => {
  for (let i = 1; i <= numer; i++) {
    fun();
  }
};

fun1(lol, 3);
