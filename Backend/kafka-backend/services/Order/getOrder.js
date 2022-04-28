const Order = require("../../../models/Order")

var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    try {
        const OrderItems = await Order.find({
            user_id : msg
        })
        console.log("here inside get order")
        console.log(OrderItems)
        if(OrderItems){
            returnData.status = 201
            returnData.message = OrderItems
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