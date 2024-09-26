const myarray = [1, 2, 3, 4, 5, 6];

const answer = myarray.map(sqrt);
console.log(answer);

function sqrt(values) {
  return (values = values * 2);
}

//++++++++++++++++++ this key word
const person1 = {
  Name: "vaibhav",
  food: "burger",
  location: "Delhi",
  detail: function () {
    console.log(`${this.Name} lives in ${this.location}`);
  },
};

person1.detail();

//constructor

function car(make, model, year, color) {
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color
}

const car1 = new car("gwagnor","odi",2024,"black")

console.log(car1.make)

// classes

class product{
  constructor(Name ,price){
    this.Name = Name;
    this.price=price;
  }
  
  display(){
    console.log(`${this.Name} is the product`);
  }
  price(){
    console.log(`${this.price} is tht price`);
  }
}


const apple = new product("banana",25.00);

apple.display();


