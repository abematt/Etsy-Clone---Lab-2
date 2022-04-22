const Product = require("../../../models/Product")

var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    try {
        const productList = await Product.find().limit(5)
        if(productList.length>0){
            returnData.status = 201
            returnData.message = productList
            callback(null,returnData)
        }
        else{
            returnData.status = 400
            returnData.message = "Product Not Found"
            callback(null,returnData)
        }
    }catch(err){
        returnData.status = 400
        returnData.message = err
        callback(null,returnData)
    }
}

exports.handle_request = handle_request