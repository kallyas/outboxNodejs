var book = require('./books');

const library = [];

var book1 = new book('345FGTS','Hello', 'Doug');
var book2 = new book('45FGTS','Hello', 'Doug');
// function createBook() {
//     new book('345FGTS','Hello', 'Doug');
// }

library.push(book1.book())
library.push(book2.book())
console.log(library);

module.exports = library;