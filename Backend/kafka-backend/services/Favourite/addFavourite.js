const Favourite = require("../../../models/Favourite")

var returnData = {
    status: "",
    message: ""
}

async function handle_request(msg,callback){
    const newFavourite = new Favourite({
        user_id: msg.user_id,
        product_id: msg.product_id,
    })

    try {
        const favourite = await newFavourite.save();
        returnData.status = 201
        returnData.message = favourite
        callback(null,returnData)
    }catch(err){
        returnData.status = 400
        returnData.message = err
        callback(null,returnData)
    }
}

exports.handle_request = handle_request