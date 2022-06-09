const PublisherModel= require("../models/publisherModel")

const createPublisher= async function(req,res){
    let data= req.body
    let publisherData= await PublisherModel.create(data)
    res.send( { msg:publisherData } )
}

module.exports.createPublisher= createPublisher