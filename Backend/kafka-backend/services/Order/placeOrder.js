const Order = require("../../../models/Order")

var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    const newOrder = new Order(msg);

    try {
        const orderPlaced = await newOrder.save();
        returnData.status = 201
        returnData.message = orderPlaced
        callback(null,returnData)
    }catch(err){
        returnData.status = 400
        returnData.message = err
        callback(null,returnData)
    }
}

exports.handle_request = handle_request