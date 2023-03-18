const express = require("express");
const bookRouter = express.Router();
const { getBooks, addBook } = require("../controllers/booksControllers");
console.log(addBook)
bookRouter.get("/", getBooks);
// bookRouter.get("/:id");
bookRouter.post("/", addBook);
// bookRouter.delete("/:id");
// bookRouter.put("/:id");
// bookRouter.patch("/:id/isread");

module.exports = bookRouter;
