const mongoose = require('mongoose')
const Schema = mongoose.Schema


// estruturando o model
const productSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    title: {
        type: String,
        auto: false,
        required: true
    },
    description: {
        type: String,
        auto: false,
        required: true
    },
    price: {
        type: String,
        auto: false,
        required: true
    },
    category: {
        type: String,
        auto: false,
        required: true
    }

})

// atribuindo o schema a uma collection
const collection = mongoose.model('product', productSchema)

module.exports = collection