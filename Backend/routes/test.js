const router = require("express").Router();
var kafka = require('../kafka/client')


router.get("/testAPI", (req,res)=> {
    res.send("this test is successful")
});

router.post("/testAPI2", (req,res)=> {
    kafka.make_request('post_book',req.body, function(err,results){
        if (err){
            console.log("Inside err");
            res.json({
                status:"error",
                msg:"System Error, Try Again.",
                error:err
            })
        }else{
            console.log("Inside else");
                res.json("successfully completed")

                res.end();
            }
    })
    
})
module.exports = router