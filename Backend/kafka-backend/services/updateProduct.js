const Product = require("../../models/Product")


var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    try{
        const updatedProduct = await Product.findByIdAndUpdate(
            msg.id,
            {
                $set: msg.body,
            },
            {new:true}
        );
        if(updatedProduct){
            returnData.status = 201
            returnData.message = updatedProduct
            callback(null,returnData)
        }
        else{
            returnData.status = 400
            returnData.message = "Failed to find product"
            callback(null,returnData)
        }

    }catch{
        returnData.status = 400
        returnData.message = "Failed to update details"
        callback(null,returnData)
    }
}

exports.handle_request = handle_request;