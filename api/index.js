import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userroutes from './routes/userroute.js';
import authRout from './routes/authRout.js';
dotenv.config();
mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log("Mongodb connected");
})
    .catch(err => {console.log(err)});
const app = express();
app.use(express.json());

app.listen(3000, ()=>{
    console.log("server is running on port 3000!!");
});
app.use('/api/user',userroutes);
app.use('/api/auth', authRout);
















