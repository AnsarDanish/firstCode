const express=require('express')

const router=express.Router();

// http://localhost:4500/users
router
.get("/" ,(req , res)=>{
    res.send("get route called")
})
.post("/" ,(req , res)=>{
    res.send("post route called")
})
.delete("/" ,(req , res)=>{
    res.send("delete route called")
})
.put("/" ,(req , res)=>{
    res.send("put route called")
})

module.exports=router