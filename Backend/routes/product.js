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
                    .json(result.message)
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

router.get("/find/:id",verifyToken,async(req,res)=>{
    kafka.make_request('get_product',req.params.id,function(err,result){
        if(err){
            return res
                .status(400)
                .json({"status":400,"message":err})
        }
        else{
            return res  
                .status(result.status)
                .json({"status":result.status,"message":result.message})
        }
    })
})

module.exports = router;

router.get("/all",verifyToken,async(req,res)=>{
    kafka.make_request('get_all_products',req.params.id,function(err,result){
        if(err){
            return res
                .status(400)
                .json({"status":400,"message":err})
        }
        else{
            return res  
                .status(result.status)
                .json({"status":result.status,"message":result.message})
        }
    })
})
