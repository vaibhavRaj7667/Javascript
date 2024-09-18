// Create an object representing a book with properties like title, author, and year, and log the object to the console
const book = {
  title: "let us c",
  author: "Yashavant Kanetkar",
  year: "1990",

  full: function () {
    return `title is ${this.title} and author is ${this.author}`;
  },

  edit: function (new_date) {
    this.year = new_date;
  },
};

console.log(book.title);
console.log(book.author);

console.log(book.full());

book.edit(2020);
console.log(book.year);

const books = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  genre: "Fiction",
};

// for (let key in books) {
//   if (books.hasOwnProperty(key)) {
//     console.log(`${key}: ${books[key]}`);
//   }
// }

for (let i in books) {
  console.log(`${i}: ${books[i]}`);
}

console.log(Object.keys(books));
console.log(Object.values(books));
