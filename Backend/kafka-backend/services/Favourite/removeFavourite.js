const Favourite = require("../../../models/Favourite")

var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    try {
        const favourite = await Favourite.deleteOne(msg)
        if(favourite){
            returnData.status = 201
            returnData.message = favourite
            callback(null,returnData)
        }
        else{
            returnData.status = 400
            returnData.message = "Favourite Not Found"
            callback(null,returnData)
        }
    }catch(err){
        returnData.status = 400
        returnData.message = err
        callback(null,returnData)
    }
}

exports.handle_request = handle_request