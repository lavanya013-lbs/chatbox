import { generateToken } from "../lib/utils.js";
import User from "../../models/user.js"
import bcrypt from "bcryptjs"


export const signup= async(req,res)=>{
    
    const {fullName,email,password}=req.body

    try{
        if(!fullName || !email || !password){
            return res.status(400).json({message:"All fields are required"})
        }

        if(password.length <6){
            return res.status(400).json({message:"Password must be at least 6 characters"})
        }
        const emailregx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailregx.test(email))
         return res.status(400).json({message:"Invalid email format"})

    
    const user= await User.findOne({email});
    if(user) 
        return res.status(400).json({message:"email already exists"})
        const salt=await bcrypt.genSalt(10)
        const hashedpassword=await bcrypt.hash(password,salt)

        const newUser=new User({
            fullName,
            email,
            password:hashedpassword
        })
        if(newUser){
            generateToken(newUser._id,res)
            await newUser.save()
            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                profilePic:newUser.profilePic

            });

            //todo:send a welcome email to user
            
        }
        else{
            res.status(400).json({message:"invalid user data"})
        }
    }

        catch(error){
            console.log("error in signup controller",error)
            res.status(500).json({message:"internal server"})
        
        }
           
    }
