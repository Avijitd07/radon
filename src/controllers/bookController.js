const AuthorModel = require("../models/authorModel")
const PublisherModel= require("../models/publisherModel")
const BookModel= require("../models/bookModel")

const createBook= async function(req, res){
    let data= req.body
    let bookData= await BookModel.create(data)
    res.send( { msg:bookData } )



    // const authorId= data.author_id
    const searchId= await AuthorModel.findById("62a1d673e3fe11735981d73e")
    const val= searchId._id

    const searchPublisherId= await PublisherModel.findById("62a1da8e320fa8f8670e3116")
    const val2= searchPublisherId._id
    // console.log(val);

    if(data.author_id.length !== 0){
        if(data.author_id == val){
            console.log("Correct author Id");
        }else{
            console.log("Author is not present");
        }
    }else{
        console.log("This field is required");
    }
    // console.log(authorId)

    if(data.publisher.length !== 0){
        if(data.publisher == val2){
            console.log("Correct publisher Id");
        }else{
            console.log("Publisher is not present");
        }
    }else{
        console.log("This field is required");
    }
    
}


const getBooks= async function(req,res){
    let allBookData= await BookModel.find().populate('author_id').populate('publisher')
    res.send( { msg:allBookData } )
}

const updateBookData= async function(res,req){
    
    
    let updateBook= await BookModel.find( { publisher:"62a1da8e320fa8f8670e3116"} )
    // let updateBook2= await BookModel.find( { publisher:"62a232c50e8fcd4d29dc7e2b"} )
    console.log(updateBook)
    // console.log(updateBook2)
}

const updatePrice= async function(req,res){
    let id= req.params.id
    let updatedPrice= await BookModel.findByIdAndUpdate(id, req.body,{
        new:true
    })
    res.send({msg:updatedPrice})
}


module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.updateBookData= updateBookData
module.exports.updatePrice= updatePrice