import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter your name"],
        unique: true,
    },
        
        email: {
          type: String,
          requreid: [true, "Please enter your name"],
          unique: true,
          
        },
    password:{
        type:String,
        required: [true, "Please provide a password"] },},
       {timestamps:true}
);
const User = mongoose.model("User",userSchema);
export default User;
