const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")

const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/basicCode", UserController.basicCode)

router.get("/basicCode2", UserController.basicCode2)

module.exports = router;