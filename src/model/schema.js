const mongoose = require('mongoose')
const Schema = mongoose.Schema


// model structure
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

// assigning schema to a collection
const collection = mongoose.model('product', productSchema)


module.exports = collection