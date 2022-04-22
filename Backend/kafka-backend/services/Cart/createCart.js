const Cart = require("../../../models/Cart")

var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    const cartItem = new Cart(msg);

    try {
        const savedCart = await cartItem.save();
        returnData.status = 201
        returnData.message = savedCart
        callback(null,returnData)
    }catch(err){
        returnData.status = 400
        returnData.message = err
        callback(null,returnData)
    }
}

exports.handle_request = handle_request