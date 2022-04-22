var kafka = require('../kafka/client')
const { verifyToken } = require("./verifyToken");
const e = require("express");
const router = require("express").Router();

router.post("/create",verifyToken,async(req,res)=>{

})

module.exports = router;