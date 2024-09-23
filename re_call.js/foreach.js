//forEach() = method used to iterate over the elemnts
//            of an array and apply a specified function (callback)
//            to each elemts
//            array.forEach(callback)
//            elemts, index, array are provided
let myarray = [1, 2, 3, 6, 5, 4];

myarray.forEach(square);

function square(values) {
  console.log(values * values);
}

function print(values) {
  console.log(values);
}
