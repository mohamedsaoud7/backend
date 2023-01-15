const Administrateur=require("../models/administrateurs")
const express=require("express")
const { response } = require("express")
const { model } = require("mongoose")
const router=new express.Router()

router.post("/admin",async (req,res)=>{
    const administrateur= await Administrateur.findOne({"email":req.body.email,"password":req.body.password})
    if(administrateur===null) return res.status(400).send(salem)
    res.send(administrateur)
    
})
module.exports=router