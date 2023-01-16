const mongoose =require("mongoose")

const adminSchema = new mongoose.Schema({
   
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      /*validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid')
        }
      }*/
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
      /*validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot contain "password"')
        }
      }*/
    }
    
    
  })
  const Administrateur=mongoose.model("Administrateur",adminSchema)
  module.exports=Administrateur