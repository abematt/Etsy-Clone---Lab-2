function handle_request(msg,callback){
    console.log("Inside the backend of kafka");
    console.log(msg);
    
    callback(null,msg)
    console.log("after callback");
};

exports.handle_request = handle_request;