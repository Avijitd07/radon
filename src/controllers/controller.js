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
        {bookName: "Two States"},
        {price:100},
        {new: true},
    );
    // console.log(data)
    let id= data.author_id; 
    const authorName= await AuthorModel.find({author_id : id}).select({author_name: 1, _id:0});  // data.author_id
    const price= data.price

    res.send({msg: price,authorName})
}


// const bookPrice= async function(req, res){
//     let data= await BookModel.find({price: {$gte:50, $lte:100}}).select({bookName:1, author_id:1, price:1, _id:0 })
//     let authorData=[];
//     for(let i=0; i<data.length; i++){
//         authorData[i]= await AuthorModel.find({author_id:data[i].author_id}).select({author_name:1, author_id:1, _id:0})
//     }
//     res.send({data,authorData})
// }

// const booksbyauthorid= async function(req, res){
//     let userRequest= req.params
//     console.log(userRequest)
// }

const bookPrice= async function (req,res){
    let data= await BookModel.find( { price : { $gte: 50, $lte: 100} } );
    
        let val= data.map((element) => element.author_id)
        
        let authorName= await AuthorModel.find( { author_id: val } ).select({author_name: 1, _id:0});
        
        
    
     res.send({msg: authorName})
    
}

const booksbyauthorid= async function (req, res){

    let val= req.params.authorid
    let data= await BookModel.find({ author_id:val }).select({ bookName:1, _id:0 })
    res.send(data)
}


const authorAge= async function(req, res){

    let bookData= await BookModel.find( { ratings:{$gt:4 } } )
    let authorData= [];
        for(let i=0; i<bookData.length; i++){
        authorData= await AuthorModel.find( { author_id: bookData[i].author_id  }, { age: {$gt: 50}} ).select( { author_name:1, age:1, _id:0} )   
        }
     res.send({msg:authorData})
 }

 
module.exports.createBook= createBook
module.exports.createAuthor= createAuthor 
module.exports.getByAutherIdandName= getByAutherIdandName
module.exports.bookPriceUpdate= bookPriceUpdate
module.exports.bookPrice= bookPrice
module.exports.booksbyauthorid= booksbyauthorid
module.exports.authorAge= authorAge
