const Shop = require("../../../models/Shop")

var returnData = {
    status: "",
    message: ""
}
async function handle_request(msg,callback){
    const newShop = new Shop({
        owner_id: msg.owner_id,
        name: msg.name,
        img: msg.img,
        email: msg.email,
    })

    try{
        const savedShop = await newShop.save();
        returnData.status = 201
        returnData.message = savedShop
        callback(null,returnData)
    }catch(err){
        returnData.status = 400
        returnData.message = err
        callback(null,returnData)
    }
}

exports.handle_request = handle_request