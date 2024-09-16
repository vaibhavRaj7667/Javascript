let n = 10;
for (let i = 1; i <= n; i++) {
  console.log(i);
}

let s = "";
for (let i = 1; i <= 10; i++) {
  s += i + " ";
}

console.log(s);

for (let i = 1; i <= 10; i++) {
  let result = i * 5;
  console.log(result);
}

let total = 0;
let count = 0;
while (count <= 10) {
  total += count;
  count++;
}

console.log(`total is ${total}`);

let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 0; i < 5; i++) {
  let path = "";
  for (let j = 0; j <= i; j++) {
    path += "* ";
  }
  console.log(path);
}

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  } else {
    console.log(i);
  }
}
