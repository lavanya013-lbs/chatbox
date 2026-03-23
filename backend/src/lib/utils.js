import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

export const generateToken=(userId,res)=>{
    const{jWT_SECRET}=process.env;
    if(!jWT_SECRET){
        throw new Error("JWT_SECRET is not configured");
    }


    const token=jwt.sign({userId:userId},JWT_SECRET,{
        expiresIn:"7d"
    });

    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,//ms
        httpOnly:true,//prevents XSS attacks
        sameSite:"strict",//CSRF attacks
        secure:process.env.NODE_ENV=="development"?false:true,
    })
    return token
}