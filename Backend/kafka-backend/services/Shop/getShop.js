const Shop = require("../../../models/Shop")

var returnData = {
    status: "",
    message: "",
}

async function handle_request(msg,callback){
    try{
        const shopDetails = await Shop.findOne(msg)

        if(shopDetails) {
            returnData.status = 201
            returnData.message = shopDetails
            callback(null,returnData)
        }
        else{
            returnData.status = 400
            returnData.message = "Shop not found"
            callback(null,returnData)
        }
    }catch(err){
        returnData.status = 400
        returnData.message = "An unknown error occured"
        callback(null,returnData)
    }
}

exports.handle_request = handle_request