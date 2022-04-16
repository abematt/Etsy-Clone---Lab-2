const User = require("../../models/User")
const CryptoJS = require('crypto-js')
const jwt = require("jsonwebtoken")

var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    console.log("Inside the backend of kafka");
    console.log(msg);
    const newUser = new User({
        username: msg.username,
        email: msg.email,
        password: CryptoJS.AES.encrypt(msg.password,process.env.PASS_SEC),
    });
    try {
        const savedUser = await newUser.save();
        returnData.status = 201
        returnData.message = savedUser
        callback(null,returnData)
    }catch(err){
        returnData.status = 400
        returnData.message = err
        callback(null,returnData)
    }
    
    console.log("after callback");
};

exports.handle_request = handle_request;