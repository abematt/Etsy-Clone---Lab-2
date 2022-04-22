const Cart = require("../../../models/Cart")

var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    try {
        const CartItems = await Cart.find({
            user_id : msg
        })
        if(CartItems){
            returnData.status = 201
            returnData.message = CartItems
            callback(null,returnData)
        }
        else{
            returnData.status = 400
            returnData.message = "Cart Not Found"
            callback(null,returnData)
        }
    }catch(err){
        returnData.status = 400
        returnData.message = err
        callback(null,returnData)
    }
}

exports.handle_request = handle_request