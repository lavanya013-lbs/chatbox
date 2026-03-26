import dotenv from "dotenv";

// dotenv.config({ path: "../.env" }); 
dotenv.config();  


// const express=require('express');
import express from 'express';

import path from "path";
import { ENV } from "../src/lib/env.js"
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { connectDB } from './lib/db.js';
// import dotenv from "dotenv";
// dotenv.config();
// import { ENV } from "../env.js";


const app=express();
const __dirname=path.resolve();

const PORT=ENV.PORT ||3000 ;

app.use(express.json());





app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // app.get("*", (_, res) => {
  //   res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  // });
}




app.listen(PORT,()=> {
    console.log("server is running in port " + PORT)
    connectDB() 
})