const UserModel= require("../models/userModel")
const OrderModel= require("../models/orderModel")
const ProductModel= require("../models/productModel")

const mid1= function ( req, res, next) {
    let header= req.headers.isfreeappuser
    console.log(header)

    if(header !== undefined ){
        next();
    }else{
        res.send("The request is missing, is mandatory")
    }
    console.log("Hi I am a middleware named Mid1")
    
}


module.exports.mid1= mid1


