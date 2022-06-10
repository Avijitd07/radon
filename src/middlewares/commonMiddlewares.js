const middelWear= function (req, res, next) {
    let date= new Date()
    let ip= req.ip
    let url= req.url
    

    console.log(date,ip,url)
    next();

}


module.exports.middelWear= middelWear

