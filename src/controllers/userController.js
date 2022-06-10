const { model } = require("mongoose")

const basicCode= async function(req, res) {
    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
}

const basicCode2= async function(req, res) {
    console.log( "This is a Middlewear")
    res.send({ msg: "Nice to see you"})
}



module.exports.basicCode= basicCode
module.exports.basicCode2= basicCode2