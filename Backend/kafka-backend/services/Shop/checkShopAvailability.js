const Shop = require("../../../models/Shop")

var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    try{
        console.log(msg)
        const shopDetails = await Shop.findOne(msg)

        if(shopDetails){
            console.log("this is what we got",shopDetails)
            returnData.status = 400
            returnData.message = "Shopname already exists"
            callback(null,returnData)
        }
        else {
            returnData.status = 201
            returnData.message = "Shopname available"
            callback(null,returnData)
        }
    }catch(err){
        returnData.status = 400
        returnData.message = "An unknown error occured"
        callback(null,returnData)

    }
    
}


exports.handle_request = handle_request