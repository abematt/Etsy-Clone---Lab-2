const router = require("express").Router();
const KafkaRPC = require("../kafka/kafkarpc");
const User = require('../models/User')
var kafka = require('../kafka/client')

//Register
router.post("/register",  (req,res)=>{

    kafka.make_request('auth', req.body,function(err,result){
        if(err){
            res.json({
                status:"error",
                msg: "System Error, Try Again",
                error: err
            })
        }
        else{
            res.json({
                status: "success",
                msg: "Here is what we did",
                result: result,
            })
        }
    })
    

});

router.post("/login",async(req,res)=>{
    try{

        const user = await User.findOne({username: req.body.username});
        const password = user.password
        if (password != req.body.password){
            res
                .status(401)
                .json("Wrong Credentials!");
        }
        else{
            res
                .status(200)
                .json(user);
        }
    }catch(err){
        res.status(500).json("Something went wrong")
    }
})

module.exports = router;