const mongoose = require("mongoose");

MONGO_URL = "mongodb+srv://admin:admin123@etsy-clone.nfaqr.mongodb.net/etsy-clone?retryWrites=true&w=majority"

// const mongooseConnection = mongoose.connect(process.env.MONGO_URL
//     ).then(()=>console.log("DB Connection Successful!")).catch((err)=>{
//         console.log(err.message);
//     });

const mongooseConnection = mongoose.connect(MONGO_URL
    ).then(()=>console.log("DB Connection Successful!")).catch((err)=>{
        console.log(err.message);
    });

module.exports = mongooseConnection