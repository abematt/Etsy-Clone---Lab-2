const mongoose = require("mongoose");

const mongooseConnection = mongoose.connect(process.env.MONGO_URL
    ).then(()=>console.log("DB Connection Successful!")).catch((err)=>{
        console.log(err.message);
    });

module.exports = mongooseConnection