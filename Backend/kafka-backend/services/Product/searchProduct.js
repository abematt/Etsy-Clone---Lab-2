const Product = require("../../../models/Product")

var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    try {
        console.log("Product is",msg)
        // const product = await Product.find({name: new RegExp(msg.name,"i")})
        // const product = await Product.find({$text: {$search: msg.name}})
        // const product = await Product.find({name:{$regex :msg.name}})
        // msg.name = "table"
        const userRegex = new RegExp(msg.name,'i')
        const product = await Product.find({name: userRegex}).sort("asc").limit(5)
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