module.exports = function (ISBN, title, author) {
    this.ISBN = ISBN;
    this.title = title;
    this.author = author;
    this.book = function () { 
        return {
            ISBN,
            title,
            author
        };
    }
}