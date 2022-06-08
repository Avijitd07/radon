const express = require('express');
const router = express.Router();
const Controller= require("../controllers/controller")



router.post("/createBook", Controller.createBook  )

router.post("/createAuthor", Controller.createAuthor)

router.get("/getByAutherIdandName", Controller.getByAutherIdandName )

router.get("/bookPriceUpdate", Controller.bookPriceUpdate )

router.get("/bookPrice", Controller.bookPrice )

router.get("/booksbyauthorid/:authorid", Controller.booksbyauthorid )

router.get("/authorAge", Controller.authorAge) 



module.exports = router;