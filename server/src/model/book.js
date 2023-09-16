const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  authorId: {
    type: String,
  },
});

const Book = new mongoose.model("Book", bookSchema);

module.exports = Book;
