const Administrateur=require("../models/administrateurs")
const express=require("express")
const router=new express.Router()

router.post("/admin",async (req,res)=>{
    try{
    const administrateur= await Administrateur.findOne({email:req.body.email,password:req.body.password})
    
    res.send(administrateur)} catch(e){res.status(400).send("salem")}
    
})
router.post("/admin/login",async (req,res)=>{
   try{ const administrateur= new Administrateur(req.body)
   await administrateur.save()
    res.send(administrateur)
    console.log(administrateur)} catch(e){res.status(400).send(e)}
})
module.exports=router