const Cart = require("../../../models/Cart")


var returnData = {
    status: "",
    message: ""
}
async function handle_request(msg, callback){
    try{
        const updatedCart = await Cart.findByIdAndUpdate(
            msg.id,
            {
                $push: {"products":msg.body},
            },
            { new:true}
        );
        if(updatedCart){
            returnData.status = 201
            returnData.message = updatedCart
            callback(null,returnData)
        }
        else{
            console.log("This is updated cart",updatedCart)
            returnData.status = 400,
            returnData.message = "Failed to find user",
            callback(null,returnData)
        }

    }catch{
        returnData.status = 400
        returnData.message = "Failed to update details"
        callback(null,returnData)
    }
}

exports.handle_request = handle_request;