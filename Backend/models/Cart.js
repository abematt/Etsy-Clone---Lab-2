const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        products: [
            {
                product_id: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
                gift_packing: {
                    type: Boolean,
                    default: false,
                },
            },
        ],
    },
    {timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema)