const User = require("../../../models/User")
const CryptoJS = require('crypto-js')
const jwt = require("jsonwebtoken")

var returnData = {
    status: "",
    message: ""
}
async function handle_request(msg, callback){
    try{
        console.log(msg)
        const updatedUser = await User.findByIdAndUpdate(
            msg.id,
            {
                $set: msg.body,
            },
            { new:true}
        );
        if(updatedUser){
            returnData.status = 201
            returnData.message = updatedUser
            callback(null,returnData)
        }
        else{
            returnData.status = 400,
            returnData.message = "Failed to find user",
            callback(null,returnData)
        }

    }catch{
        returnData.status = 400
        returnData.message = "Failed to update details"
        callback(null,returnData)
    }
}

exports.handle_request = handle_request;