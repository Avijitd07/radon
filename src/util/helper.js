const printDate = function(){
    console.log(new Date());
}

module.exports.printDate = printDate;

const printMonth = function(){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let d = new Date();
    console.log(months[d.getMonth()]);
}

module.exports.printMonth = printMonth;

getBatchInfo = function(){
    console.log("Radon, W3D2, the topic for today is Nodejs module system");
}

module.exports.getBatchInfo = getBatchInfo;