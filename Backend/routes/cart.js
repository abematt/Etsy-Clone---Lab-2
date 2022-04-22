var kafka = require('../kafka/client')
const { verifyToken } = require("./verifyToken");
const e = require("express");
const router = require("express").Router();

router.post("/create",verifyToken,async(req,res)=>{
    kafka.make_request('create_cart',req.body,function(err,result){
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

router.get("/get-items/:id",verifyToken,async(req,res)=>{
    kafka.make_request('get_cart_items',req.params.id,function(err,result){
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

router.put("/:id",verifyToken,async(req,res)=>{
    var req_payload = {
        body: req.body,
        id: req.params.id
    }

    kafka.make_request('update_cart',req_payload,function(err,result){
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

router.delete("/remove-item/:id",verifyToken,async(req,res)=>{
    kafka.make_request('remove_cart_item',req.params.id,function(err,result){
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