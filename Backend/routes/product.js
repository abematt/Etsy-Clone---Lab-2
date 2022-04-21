const Product = require("../models/Product")
var kafka = require('../kafka/client')
const { verifyToken } = require("./verifyToken");
const router = require("express").Router();

router.post("/create", verifyToken, async(req,res)=>{

        kafka.make_request('create_product',req.body,function(err,result){
            if(err){
                return res
                    .status(400)
                    .json(err)
                
            }
            else{
                return res
                    .status(result.status)
                    .json(result.message.message)
            }
        })
})

router.put("/:id",verifyToken,async(req,res)=>{
    var req_payload = {
        body: req.body,
        id: req.params.id
    }
    kafka.make_request('update_product',req_payload,function(err,result){
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

module.exports = router;
