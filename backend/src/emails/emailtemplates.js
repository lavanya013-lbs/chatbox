export const createWelcomeEmailTemplate = (name, clientURL) => {
  return `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 500; background: linear-gradient(to right, #36D1DC, #5B86E5); padding: 20px; border-radius: 10px;">
      Welcome to Messenger!
    </h1>

    <div style="background-color: #ffffff; padding: 35px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
      
      <p style="font-size: 18px; color: #5B86E5;">
        <strong>Hello ${name},</strong>
      </p>

      <p>
        We're excited to have you join our messaging platform! Messenger connects you with friends, family, and colleagues in real-time, no matter where they are.
      </p>

      <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #36D1DC;">
        <p style="font-size: 16px; margin: 0 0 15px;">
          <strong>Get started in just a few steps:</strong>
        </p>

        <ul style="padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 10px;">Set up your profile picture</li>
          <li style="margin-bottom: 10px;">Find and add your contacts</li>
          <li style="margin-bottom: 10px;">Start a conversation</li>
          <li>Share photos, videos, and more</li>
        </ul>
      </div>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${clientURL}" 
          style="background: linear-gradient(to right, #36D1DC, #5B86E5); 
          color: white; 
          padding: 12px 25px; 
          text-decoration: none; 
          border-radius: 50px; 
          font-weight: 500; 
          display: inline-block;">
          Open Messenger
        </a>
      </div>

      <p style="margin-top: 30px;">
        If you need any help or have questions, we're always here to assist you.
      </p>

      <p style="margin-top: 20px;">
        Best regards,<br/>
        <strong>The Messenger Team</strong>
      </p>

    </div>
  </div>
  `;
};