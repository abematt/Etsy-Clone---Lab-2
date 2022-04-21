const mongoose = require("mongoose")

const ShopSchema = new mongoose.Schema({
    owner_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    }
},
{timestamps: true},
);

module.exports = mongoose.model("Shop", ShopSchema)