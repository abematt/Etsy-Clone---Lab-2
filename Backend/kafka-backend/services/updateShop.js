const Shop = require("../../models/Shop")


var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    try{
        const updatedShop = await Shop.findByIdAndUpdate(
            msg.id,
            {
                $set: msg.body,
            },
            {new:true}
        );
        if (updatedShop){
            returnData.status = 201
            returnData.message = updatedShop
            callback(null,returnData)
        }
        else{
            returnData.status = 400
            returnData.message = "Failed to find shop"
            callback(null,returnData)
        }
    }catch{
        returnData.status = 400
        returnData.message = "Failed to update details"
        callback(null,returnData)
    }
}

exports.handle_request = handle_request;