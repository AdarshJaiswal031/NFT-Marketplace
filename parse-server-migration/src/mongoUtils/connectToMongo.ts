import mongoose from "mongoose";
import config from '../config';
const connectDB=async ()=>{
    if(mongoose.connections[0].readyState){
        console.log("Already Connected !!")
    }
    mongoose.connect(config.DATABASE_URI).then((res)=>{
        console.log("Connect Successfully ");
    }).catch((error)=>{
        console.log("Error occured while connecting !!");
    })
}

export { connectDB };