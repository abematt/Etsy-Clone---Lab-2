const Shop = require("../models/Shop")
var kafka = require('../kafka/client')
const { verifyToken } = require("./verifyToken");
const e = require("express");
const router = require("express").Router();


router.post("/create",verifyToken,async(req,res)=>{
    
    kafka.make_request('create_shop',req.body,function(err,result){
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

router.put("/:id",verifyToken, async(req,res)=>{
    var req_payload = {
        body: req.body,
        id: req.params.id
    }
    kafka.make_request('update_shop',req_payload,function(err,result){
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


router.post("/availability",verifyToken,async(req,res)=>{
    kafka.make_request('check_shop_availability',req.body,function(err,result){
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

router.get("/shopDetails",verifyToken,async(req,res)=>{
    kafka.make_request('get_shop_details',req.body,function(err,result){
        if(err){
            return res
                    .status(400)
                    .json(err)
        }
        else{
            return res
                .status(result.status)
                .json({"status": result.status ,"message": result.message})
        }
    })
})

module.exports = router;