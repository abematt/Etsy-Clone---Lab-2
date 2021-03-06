
const User = require("../models/User");
var kafka = require('../kafka/client')
const { verifyToken } = require("./verifyToken");
const router = require("express").Router();

//     // if(req.body.password){
//     //     req.body.password = CryptoJS.AES.encrypt(
//     //         req.body.password,
//     //         process.env.PASS_SEC
//     //         ).toString();
//     // }


router.put("/:id",verifyToken, async(req,res)=>{
    var req_payload = {
        body: req.body,
        id : req.params.id
    }
    kafka.make_request('user_update',req_payload,function(err,result) {
        if(err){
            return res
                .status(400)
                .json(err)
        }
        else{
            return res
                .status(result.status)
                .json(result.message)
        }

    })
})

router.get("/:id",verifyToken,async(req,res)=>{
    kafka.make_request('user_details',req.params.id,function(err,result){
        if(err){
            return res
                .status(400)
                .json(err)
        }
        else {
            return res
                .status(result.status)
                .json(result.message)
        }
    })
})

module.exports = router;