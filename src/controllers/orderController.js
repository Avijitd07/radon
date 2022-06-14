const { count } = require("console")
const OrderModel= require("../models/orderModel")
const UserModel= require("../models/userModel")
const ProductModel = require("../models/productModel")


const createOrder= async function(req,res){
    let data= req.body
 

   //<==========userId validation===================>
 let user= await UserModel.findById(data.userId)
    if(!user){
        res.send("Entered userId is not valid")
    }

  //<===========productId validation================>

 let product= await ProductModel.findById(data.productId)
    if(!product){
        res.send("Entered productId is not valid")
    }


    // console.log(data.userId)
    // let orderData= await OrderModel.create(data)
    // let getOrderData= await OrderModel.find().populate(['userId','productId'])

    // res.send(getOrderData)
    
}


module.exports.createOrder= createOrder