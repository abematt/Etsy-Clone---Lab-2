const User = require("../../models/User")
const CryptoJS = require('crypto-js')
const jwt = require("jsonwebtoken")

var returnData = {
    status: "",
    message: ""
}
async function handle_request(msg, callback){
    try{
        console.log(msg)
        const getUser = await User.findById(
            msg,
        );
        returnData.status = 201
        returnData.message = getUser
        callback(null,returnData)
    }catch{
        returnData.status = 400
        returnData.message = "Failed to find User"
        callback(null,returnData)
    }
}

exports.handle_request = handle_request;