const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.token;
    console.log("token is",authHeader)
    if (authHeader) {
        console.log("am i here?")
        const token = authHeader.split(" ")[1]
        console.log(token)
        jwt.verify(token,process.env.JWT_SEC, (err,user)=>{
            try{
                if(err) return res.status(403).json("Token Invalid");
                // console.log(err)
                req.user = user
                next();

            }catch(err){
                console.log("Error is here")
            }
        })

    } else {
        res.status(401).json("You are not authenticated")
    }
    
};

module.exports = {verifyToken};