//require ('dotenv').config({path :'./env'})   // to maked it improved this will work but better approch is given below
import dotenv from "dotenv" 


import connectDB from "./db/index.js";

dotenv.config({
    path: './env' // dev of the json 
})



connectDB()













// this is used to connect mango on from index.js this is the first approach 
/*
import express from "express"
const app = express()
;( async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERROR:",error)
            throw error
        })

        app.listen(process.env.PORT,() =>{
            console.log(`APP IS LISTENING AT ${process.env.PORT}`)
        })
    }catch (error){
        console.log("ERROR : ", error)
        throw err
    }
})()                        // this is called ify imediate excute , semicolon  at begining to prevent errors used but here it is nenccesary as no lines are above that 
*/