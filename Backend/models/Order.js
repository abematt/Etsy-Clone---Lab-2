const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
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
                shop_id: {
                    type: String,
                }
            },
        ],
        amount: {
            type: Number,
            required: true
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema)