const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const commanMiddelWear= require('./middlewares/commonMiddlewares')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://cluster0.6evf0.mongodb.net/?retryWrites=true&w=majority",
{
    dBname: 'test',
    user: 'Avijit07',
    pass: 'Avijit@1998',
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/',commanMiddelWear.middelWear, route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
