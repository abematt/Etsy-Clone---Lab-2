const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    shop_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    img : {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    sales_count: {
        type: Number,
        required: false,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
})

ProductSchema.index({name: 'text'});
module.exports = mongoose.model("Product", ProductSchema)