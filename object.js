const my = {
  Name: " vaibhav raj",
  class: "BCA",
  admission_no: "22SCSE1110021",
};
// yo dont have to use dote operator again just use name to access
const { admission_no: bro } = my;
console.log(bro);

let total = 0;
function add(...give) {
  for (let i = 0; i < arguments.length; i++) {
    total += give[i];
  }
}
add(5, 5, 5, 5, 5, 5);

console.log(total);

//
let vaibhav = (a, b) => a * b;
console.log(vaibhav(5, 5));
