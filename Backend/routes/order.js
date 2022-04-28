const Order = require("../models/Order")
var kafka = require('../kafka/client')
const { verifyToken } = require("./verifyToken");
const router = require("express").Router();

router.post("/create",verifyToken,async(req,res)=>{
    kafka.make_request('place_order',req.body,function(err,result){
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

router.get("/getOrders/:id",verifyToken,async(req,res)=>{
    kafka.make_request('get_orders',req.params.id,function(err,results){
        if(err){
            return res
                .status(400)
                .json(err)
        }
        else{
            return res
                .status(results.status)
                .json(results.message)
        }        
    })
})

module.exports = router;