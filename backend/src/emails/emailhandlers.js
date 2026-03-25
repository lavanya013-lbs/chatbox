import { resendClient } from "../lib/resend.js"
import {createWelcomeEmailTemplate} from "./emailtemplates.js" 

import {ENV} from "../lib/env.js"
export const sendwelcomeemail=async(email,name,clientURL)=>{
    const {data,error}= await resendClient.emails.send({
        from: `${ENV.EMAIL_FROM_NAME} <${ENV.EMAIL_FROM}>`,
        to:email,
        subject:"welcome to chatbox",
        html:createWelcomeEmailTemplate(name,CLIENT_URL)
    });
    if(error){
        console.error("error sending welcome email:",error);
        throw new Error("failed to send welcome email")}
      
        
        console.log("welcome Email sent successfully ",data);
        
    }

