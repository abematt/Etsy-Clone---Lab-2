const User = require("../../models/User")

async function handle_request(msg,callback){
    console.log("Inside the backend of kafka");
    console.log(msg);
    const newUser = new User({
        username: msg.username,
        email: msg.email,
        password: msg.password,
    });

    try {
        const savedUser = await newUser.save();
        callback(null,savedUser)
        // res
        //     .status(201)
        //     .json(savedUser);
    }catch(err){
        // res
        //     .status(400)
        //     .json(err);
    }
    // res.end();
    
    console.log("after callback");
};

exports.handle_request = handle_request;