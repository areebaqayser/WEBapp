const mongoose = require('mongoose')
const { type } = require('os')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
})


const Product = mongoose.model("Product", productSchema)

module.exports = Product;