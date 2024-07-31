import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB IS CONNECTED !!!! DB HOST:${connectionInstance.connection.host}`);//used to kw  where we are connected
    }catch(error){
        console.log("MONGODB connection error",error)
        process.exit(1) // thier in node module no need to impert it very good process read if you have time and whenever their is time 
    }
}

export default connectDB