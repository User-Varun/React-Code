const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

// In object destructuring :-

// we can take out elements by their names and in random order.

// In Array destructuring :-

// the elements are taken out by their array order or index. (can take from the array in random order )

// ********** Object & Array destructuring (Start) ****

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*

const book = getBook(2);
const books = getBooks();
books;


// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre] = genres;

console.log(author, title);
// console.log(primaryGenre, secondaryGenre);

// **** Object & Array destructuring (End) ****

// **** Rest & Spread Operator (Start) ****

const [primaryGenre, secondaryGenre, ...others] = genres;

const newGenres = [...genres, "epic fantasy"];
const updatadBook = {
  ...book,
  // adding a new property
  moviePublicationDate: "2001-12-19",
  // overwriting an existing property
  // pages: 1210,
};
updatadBook;

// **** Rest & Spread Operator (End) ****

// ******* Template Literals (Start) *******************

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages} pages long book, was written by ${author} and published in ${getYear(
  publicationDate
)} The  book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;

summary;

// ******* Template Literals (End) *******************

// ******** Ternaries Insted of IF/ELSE Statements (Start)******
const pageRange = pages > 1000 ? "over a thousand" : "less than 1000";

console.log(`The Book has ${pageRange} pages`);
// ******** Ternaries Insted of IF/ELSE Statements (End)******

// ***************Arrow Functions (Start) ****************
// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));
// ***************Arrow Functions (End) ****************

// ***** Short-circuiting and logical operations: && , || , ?? (Start) *****
console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "this book has a movie");

console.log(true || "someString");
console.log(false || "someString");

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// ***** Short-circuiting and logical operations: && , || , ?? (End) *****

// ****** Optional Chaining (Start) ***************

// benefits of optional chaining :-

// if we are not certain of some property being there , when used the optional chaining (?) returns undefined .

// we can chain optional chaining with nullish qualishing operator (?? ) to return a value ( even a falsy one, like 0 )

function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  return goodread * librarything;
}
console.log(getTotalReviewCount(book));
// ****** Optional Chaining (End) ***************

*/

// ******* The Array Map method (Start) ****************

// Map , Filter , Reduce, methods of array are so popular because they do not mutate the original array but instead returns a new array based on original one.

// The Map Method :- creates a new array and loops through each element applying changes to each of the elements.

const books = getBooks();

function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  return goodread + librarything;
}

const a = [1, 45, 64, 4, 43, 4].map((e) => e * 2);
console.log(a);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

// ******* The Array Map method (End) ****************

// ******* The Array Filter method (Start) ****************

// The Filter Method :- filter outs some elements in array by following some conditions or arguments. it accepts a callback function in which we have to specify ( element and then a condition on which basis you want to filter out the array.

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

// ******* The Array Filter method (End) ****************

// ******* The Array Reduce method (Start) ****************

// The Reduce Method :- reduces an array into one value. the reducer method accepts one callback function ( and in that its accepts arguments 1. accumulator 2.element you want to loop through ) and starting value

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);

pagesAllBooks;

// ******* The Array Reduce method (End) ****************

// ******* The Array Sort method (Start) ****************

// The Sort Method :-  sorts and array in given order. it mutates the array. use .slice() method before sort to create a new array and then array sort to prevent mutation of original array.

const x = [2, 3, 35, 3, 5, 74];

const sorted = x.slice().sort((a, b) => b - a);

sorted;
x;

sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// ******* The Array Sort method (End) ****************

// ********* Working with immutable arrays (Start) **********

// Mission :- update , add , delete elements without changing the original array or objects.

// 1) Add book object to Array
const newBook = {
  id: 6,
  title: "Harry potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];

// 2) Delete book object from array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);

booksAfterDelete;

// 3) Update book object in the array
const bookAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);

// ********* Working with immutable arrays (End) **********

// ********* Async javascript : Promises (Start) *************
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("Varun");
// ********* Async javascript : Promises (End) *************

// ********* Async JavaScript : Async/Await (Start) *********
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}
getData();

// ********* Async JavaScript : Async/Await (End) *********
