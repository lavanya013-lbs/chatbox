import dotenv from "dotenv";

dotenv.config();
export const ENV = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  CLIENT_URL: process.env.CLIENT_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  CLOUDINARY_CLOUD_NAME:process.env.CLOUDINARY_CLOUD_NAME,
CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
CLOUDINARY_API_SECRET:process.env.CLOUDINARY_API_SECRET,
ARCJET_KEY:process.env.ARCJET_KEY,
ARCJET_ENV:process.env.ARCJET_ENV
};
// MONGO_URI=mongodb+srv://slavanyathiruvaranga_db_user:EWeE7LYfzhDnRuky@cluster0.n8wboa6.mongodb.net/chatbox_db?appName=Cluster0,
// JWT_SECRET=myjwtsecret
// NODE_ENV=development
// CLIENT_URL=http://localhost:5173
// RESEND_API_KEY=re_U6tq9pw3_H77qekDUyamfZyyiNBz6rTxv
// EMAIL_FROM="onboarding@resend.dev"
// EMAIL_FROM_NAME="Burak orkmez"





