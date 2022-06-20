let axios = require("axios")


let getWeather = async function (req, res) {

    try {
        let city = req.query.q
        let id = req.query.appid

        var options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)
        // console.log(result.data)
        res.status(201).send({ data: result.data.main.temp })
    } catch (error) {
        res.status(500).send({data:error.message, msg: "Server Error"})
    }
}

let getSortCityTemp = async function (req, res) {
    try {
        let cities=  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        let cityArray= [];
        for(let i=0; i<cities.length; i++){
            let cityObj={ city:cities[i]}
            var options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=6160992df7334cdaf7b3a29f9ba277d0`
            }
            let result = await axios(options)
            // console.log(result.data.main.temp)

            cityObj.temp= result.data.main.temp
            // console.log(cityObj)
            cityArray.push(cityObj)
        }
        // console.log(cityArray)
        let sortedArray= cityArray.sort(function(a,b){
            return a.temp-b.temp
        })
        res.status(201).send({data: sortedArray})      

    } catch (error) {
       res.status(500).send({data: error.message, msg: "Server Error"})
    }
}




module.exports.getWeather = getWeather
module.exports.getSortCityTemp= getSortCityTemp