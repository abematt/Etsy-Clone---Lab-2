const router = require("express").Router();
const KafkaRPC = require("../kafka/kafkarpc");
const User = require('../models/User')
var kafka = require('../kafka/client')

//Register
router.post("/register",  (req,res)=>{

    kafka.make_request('auth', req.body,function(err,result){
        if(err){
            return res
                    .status(400)
                    .json(err)
        }
        else{
            if (result.status == 201)
            {
                return res
                    .status(201)
                    .json(result.message)
            }
            else{
                return res
                    .status(400)
                    .json(result.message)
            }

        }
    })  

});

router.post("/login",async(req,res)=>{
    
    kafka.make_request('login', req.body,function(err,result){
        if(err){
            return res
                    .status(400)
                    .json({message: "Server Error"})
        }
        else{
            console.log("did i reach here")
            if(result.status==400)
            {
                return res
                    .status(400)
                    .json({message: result.message})
            }
            else
            {
                return res
                    .status(201)
                    .json(result.message)
            }
        }
    })
})

module.exports = router;

