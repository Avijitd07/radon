const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController= require("../controllers/weatherController")
const MemeController= require("../controllers/memeController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//APIs if cowin 
router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/getByDistrictId", CowinController.getByDistrictId)


//APIs of weather
router.get("/weather/getWeather", WeatherController.getWeather)

router.get("/weather/getSortCityTemp", WeatherController.getSortCityTemp)


//APIs to create memes
router.get("/meme/getMemes", MemeController.getMemes)

router.post("/meme/createMemes", MemeController.createMemes)





module.exports = router;