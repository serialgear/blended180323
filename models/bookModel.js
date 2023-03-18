const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: (value) => {
      value.includes("http");
    },
  },
  plot: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
});

const Book = model("book", bookSchema);

module.exports = Book;
