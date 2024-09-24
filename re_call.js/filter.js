let myarray = [1, 2, 3, 4, 5, 6, 7];

let answer = myarray.filter(iseven);
console.log(answer);

let answers = myarray.filter(isodd);
console.log(answers);

function iseven(values) {
  return values % 2 === 0;
}

function isodd(values) {
  return values % 2 !== 0;
}

let ages = [12, 34, 56, 19, 14, 17];
let results = ages.filter(adult);
console.log(results);
function adult(values) {
  if (values >= 18) {
    return 0;
  }
}
