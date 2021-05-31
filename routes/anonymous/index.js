const express = require("express");
const router = express.Router()

router.get("/",(req,res)=>{
    res.status(200).json({title:"todoappopenapi",author:"Thanaha",messageConnection:"success"})
})

module.exports = router