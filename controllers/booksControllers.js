const Book = require("../models/bookModel");

const getBooks = async (req, res) => {
  try {
    const result = await Book.find();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

const addBook = async (req, res) => {
    try {
      console.log(req.body)
      const newBook = await Book.create(req.body);
      console.log(newBook)
      res.status(201).send(newBook);
      
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};


module.exports = {
    getBooks,
    addBook
};



