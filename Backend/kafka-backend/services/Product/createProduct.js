const Product = require("../../../models/Product")
const CryptoJS = require('crypto-js')
const jwt = require("jsonwebtoken")

var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    const newProduct = new Product({
        shop_id: msg.shop_id,
        name: msg.name,
        img: msg.img,
        category: msg.category,
        description: msg.description,
        quantity: msg.quantity,
        price: msg.price,
    })

    try {
        const savedProduct = await newProduct.save();
        returnData.status = 201
        returnData.message = savedProduct
        callback(null,returnData)
    }catch(err){
        returnData.status = 400
        returnData.message = err
        callback(null,returnData)
    }
}

exports.handle_request = handle_request