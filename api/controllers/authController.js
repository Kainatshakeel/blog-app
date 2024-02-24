import User from "../models/usermodel.js"
import bcryptjs from 'bcryptjs';
export const signup = async ( req, res) => {
    const {username, email, password }=req.body;
    if (!username  || !email || !password ||!username==="" || !email==="" || !password==="") {
        return  res.status(400).json({message: "Please fill all fields"});
    }
    const hashPassword= bcryptjs.hashSync(password,10);
    const newUser= new User  ({
         username , 
         email , 
         password: hashPassword,
         });
         try{
         await newUser.save();
         res.json( "Signed up successfully!");
         }
          catch(error){
              res.status(500).json({message: error.message});

}}
