import express from 'express';
import {getAllContacts, getChartPartners, getMessageByUserId, sendMessage} from "../controllers/message.controller.js"
import { protectRoute } from '../middleware/auth.middleware.js';
import { arcjetProtection } from '../middleware/arcjet.middleware.js';
const router =express.Router();

router.use(arcjetProtection,protectRoute);

//the middlewares execute in order -so requests get rate-limited frist, then authenticated.
//this is actually more efficient since unauthenticated requests get blocked by rate limiting befor hitting the auth middleware

router.get("/contacts",getAllContacts);
router.get("/chats",getChartPartners);
router.get("/:id",getMessageByUserId);
router.post("/send/:id",sendMessage);





export default router;