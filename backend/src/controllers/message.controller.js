import Message from "../models/Message.js"
import User from "../models/user.js"
import cloudinary from "../lib/cloudinary.js"
export const getAllContacts=async(req,res)=>{
    try{
        const loggedInUserId=req.user._id;
        const filteredUsers=await User.find({ _id :{$ne:loggedInUserId}}).select("-password")
        
        res.status(200).json(filteredUsers)}
    catch(error){
        console.log("error in getAllContacts:",error)
        res.status(500).json({message:"Server error"})
    
    }
}

export const getMessageByUserId=async(req,res)=>{
    try{
        const myId=req.user._id
        const {id:userToChartId}=req.params

        const messages= await Message.find({
            $or:[
                {senderId:myId,receiverId:userToChartId},
                {senderId:userToChartId,receiverId:myId},

            ]
        });
        res.status(200).json(messages)

    }catch (error){
        console.log("error in getMessages controller:",error.message)
        res.status(500).json({error:"internal server error"})

    }
}

export const sendMessage=async(req,res)=>{
    try{
        const {text,image}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id
        let imageUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl=uploadResponse.secure_url;
        }
        const newMessage =new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl
        })
        await newMessage.save()

        //todo:send message in real time

        res.status(201).json(newMessage)


    }catch(error){
        console.log("Error in sendMessage controller:",error.message);
        res.status(500).json({error:"Internal server error"})

    }

}

export const getChartPartners=async(req,res)=>{
    try{
        const loggedInUserId =req.user._id

        const messages=await Message.find({
            $or:[{senderId:loggedInUserId},{receiverId:loggedInUserId}],

        });
        const chatPartnerIds=[... new Set(messages.map(msg=> msg.senderId.toString() === loggedInUserId.toString() ? msg.receiverId.toString():msg.senderId.toString()
    )
)]
const chartPartners=await User.find({_id:{$in:chatPartnerIds}}).select("-password")
    res.status(200).json(chartPartners)    
}
    catch(error){
        console.error("Error in getChatPartners:",error.message);
        res.status(500).json({error:"internal server error"})
    }
}