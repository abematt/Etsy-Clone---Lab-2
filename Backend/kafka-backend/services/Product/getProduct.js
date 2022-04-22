const Product = require("../../../models/Product")

var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    try {
        console.log("Product is",msg)
        const product = await Product.findById(msg)
        if(product){
            returnData.status = 201
            returnData.message = product
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