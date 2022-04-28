const Favourite = require("../models/Favourite")
var kafka = require('../kafka/client')
const { verifyToken } = require("./verifyToken");
const router = require("express").Router();

router.post("/addFav", verifyToken, async(req,res)=>{

        kafka.make_request('add_favourite',req.body,function(err,result){
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

router.post("/getFavs", verifyToken, async(req,res)=>{

    kafka.make_request('get_favourite',req.body,function(err,result){
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


router.post("/removefavs", verifyToken, async(req,res)=>{

    kafka.make_request('remove_favourite',req.body,function(err,result){
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

