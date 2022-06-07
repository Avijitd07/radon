const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    author_id: {
        type: String,
        required: true
       
    }, 
    price: Number,
    ratings: String
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books