const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel")
const BookController= require("../controllers/booksController")

router.get("/test-me", function (req, res) {
    res.send("My API to get books details")
})

router.post("/createBook", BookController.createBook)

router.get("/getBooksData", BookController.getBooksData)

module.exports = router;