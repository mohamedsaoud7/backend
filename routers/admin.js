const Administrateur=require("../models/administrateurs")
const express=require("express")
const router=new express.Router()
const User=require("../models/users")

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
router.get('/userslkol', async (req, res) => {
    try {
      const users = await User.find()
      res.send(users)
    } catch (e) {
      res.status(400).send(e) 
    }
  })
router.post("/ziduser",async (req,res)=>{
    try{
         const user = new User(req.body) 
         console.log(user)
         await user.save()
         res.send(user) 
    } catch(e){res.status(500).send(e)}

} )
router.delete('/na7iuser/:email',async (req,res)=>{
    const email=req.params.email
    try{
        const user= await User.findOne({email})
        await user.remove()
        res.send(user)
    }catch(e){res.status(600).send(e)}
    
})
  
  
module.exports=router