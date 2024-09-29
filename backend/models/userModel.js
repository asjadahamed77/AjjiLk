import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String , required:true},
    email: {type:String ,unique:true, required:true},
    password: {type:String, required:true},
    phone: { type:Number, required:true }
})

const userModel = mongoose.models.user || mongoose.model('user',userSchema)

export default userModel