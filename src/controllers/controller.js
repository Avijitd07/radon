const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")



const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function(req,res){
    let data= req.body
    let saveData= await AuthorModel.create(data)
    res.send({msg: saveData})
}

const getByAutherIdandName= async function(req,res){
    let data= await AuthorModel.find({ authorName: "Chetan Bhagat" }).select({author_id: "1"})
    let saveData= await BookModel.find({author_id: data[0].author_id})
    res.send({msg: saveData})
}

const bookPriceUpdate= async function (req,res){
   
    const data= await BookModel.findOneAndUpdate(
        {bookName: "Two states"},
        {$set: {price:100}},
        {new: true}
    );
     
    const authorName= await AuthorModel.find({author_id : "1"}).select({author_name: 1, _id:0});
    const price= data.price

    res.send({msg: price,authorName})
}

// const bookPrice= async function (req,res){
//     const data= await BookModel.find( { price : { $gte: 50, $lte: 100} } )
//     // console.log(data);
//         let val= data.map( async function(element){
//         let authorName= await AuthorModel.find( { author_id: ele.author } ).select({author_name: 1, _id:0})
        
//     })
//    res.send({msg:authorName})
    
// }

const bookPrice= async function (req,res){
    const data= await BookModel.find( { price : { $gte: 50, $lte: 100} } )
    // console.log(data);
        
        let authorName= await AuthorModel.find( { $or:[{author_id: "1"}, {author_id: "2"} ] } ).select({author_name: 1, _id:0})
        

   res.send({msg:authorName})
    
}

module.exports.createBook= createBook
module.exports.createAuthor= createAuthor 
module.exports.getByAutherIdandName= getByAutherIdandName
module.exports.bookPriceUpdate= bookPriceUpdate
module.exports.bookPrice= bookPrice