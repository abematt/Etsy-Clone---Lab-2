const mongoose = require("mongoose")

const FavouriteSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Favourite",FavouriteSchema)