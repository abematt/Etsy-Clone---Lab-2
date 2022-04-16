const User = require("../../models/User")
const CryptoJS = require('crypto-js')
const jwt = require("jsonwebtoken")

var returnData = {
    status: "",
    message: ""
}
async function handle_request(msg,callback){
   
    try {
        const user = await User.findOne({username: msg.username})
        console.log("user is",user);
        if(!user)
        {
            returnData.status = 400,
            returnData.message = "User not found",
            callback(null,returnData)
        }
        const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC)
        const plainTextPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        const {password,...others} = user._doc;
        if (plainTextPassword === msg.password)
        {   
            returnData.status = 201
            const accessToken = jwt.sign({
                id: user._id,
            },process.env.JWT_SEC,
              {expiresIn:"3d"}
            );
            returnData.message = {...others,accessToken}
          
            callback(null,returnData)
            
        }

        else
        {   
            returnData.status = 400
            returnData.message = "Invalid Credentials"
            callback(null,returnData)
        }
        

    }catch(err){
        callback(null,err)
    }
    
    console.log("after callback");
};


exports.handle_request = handle_request;