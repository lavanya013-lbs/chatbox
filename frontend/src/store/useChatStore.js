import {create} from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";

export const useChatStore=create((set,get)=>({
    allContacts:[],
    chats:[],
    message:[],
    activeTab:[],
    selectedUser:null,
    isUserLoading:false,
    isMessagesLoading:false,
    isSoundEnabled:JSON.parse(localStorage.getItem("isSoundEnabled"))===true,

    toggleSound:()=>{
        localStorage.setItem("isSoundEnabled",!get().isSoundEnabled)
        set({isSoundEnabled:!get().isSoundEnabled})
    },

    setActiveTab:(tab)=>set({activeTab:tab}),
    setSelectedUser:(selectedUser)=>set({selectedUser:selectedUser}),

    getAllContacts:async()=>{
        set({isUsersLoading:true});
        try{
            const res=await axiosInstance.get("/message/contacts");
            set({allContacts:res.data});
        } catch(error){
            toast.error(error.response.data.message);
        }finally{
            set({isUsersLoading:false});
        }
    },
    getMyChatPartners:async()=>{
        set({isUsersLoading:true});
        try{
            const res=await axiosInstance.get("/message/contacts");
            set({chats:res.data});
        } catch(error){
            toast.error(error.response?.data?.message);
        }finally{
            set({isUsersLoading:false});
        }
    },
    
    getMessagesByUserId:async (userId)=>{
        set({isMessagesLoading :true})
    try{
        const res=await axiosInstance.get(`/message/${userId}`)
        set ({message:res.data})
    }catch(error){
        toast.error(error.response?.data?.message || "Something went wrong")

    }finally{
        set({isMessagesLoading:false});

    }
    },
    
    sendMessage:async(messageData)=>{
        const {selectedUser,message}=get();
        const {authUser}=useAuthStore.getState();

        const tempId=`temp-${Date.now()}`

        const optimisticMessage={
            _id:tempId,
            senderId:authUser._id,
            receiverId:selectedUser._id,
            text:messageData.text,
            image:messageData.image,
            createdAt:new Date().toISOString(),
            isoptimistic:true,
        }
        //immidetaly update the ui by adding the message
        set({message:[...message,optimisticMessage]})

        try{
            const res=await axiosInstance.post(`/message/send/${selectedUser._id}`,messageData)
            set({message:message.concat(res.data)})
        }
        catch(error){
            set({message:message})
            toast.error(error.response?.data?.message||"something went wrong")

        }
    }

}))