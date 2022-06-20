const { default: axios } = require("axios")

let getMemes = async function (req, res) {
    try {
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        res.status(201).send({ data: result.data })
    } catch (error) {
        res.status(500).send({ data: error.message, msg: "Server Error" })
    }

}

let createMemes= async function(req,res){
    try{
        let id= req.query.template_id
        let text0= req.query.text0
        let text1= req.query.text1
        let username= req.query.username
        let password= req.query.password

        let options= {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result= await axios(options)
        res.status(201).send({data: result.data})
    }catch(error){
        res.status(500).send({data: error.message, msg: "Server error"})
    }
}

module.exports.getMemes= getMemes
module.exports.createMemes= createMemes