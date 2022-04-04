const router = require("express").Router();


router.get("/testAPI", (req,res)=> {
    res.send("this test is successful")
});

module.exports = router