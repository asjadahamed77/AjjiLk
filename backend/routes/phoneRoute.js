import express from 'express';
import authUser from '../middleware/auth.js';
import upload from '../middleware/multer.js'; // Import multer config
import { addPhone, approvePhone, getApprovedPhones, getUserAddedPhones, rejectPhone, removePhoneListing, trackPhoneStatus } from '../controllers/phoneController.js';

const PhoneRouter = express.Router();

// Allow 4 images in the 'phoneImages' field
PhoneRouter.post('/add', upload.fields([{name:'image1', maxCount:1},{name:'image2', maxCount:1},{name:'image3', maxCount:1},{name:'image4', maxCount:1}]), authUser, addPhone); 
PhoneRouter.post('/approve', approvePhone);
PhoneRouter.post('/reject', rejectPhone);
PhoneRouter.get('/unapproved', getUserAddedPhones);
PhoneRouter.get('/approved', getApprovedPhones);

PhoneRouter.get('/track/:phoneId', authUser, trackPhoneStatus);
PhoneRouter.get('/added-phones', authUser, getUserAddedPhones);
// Route to remove a phone listing
PhoneRouter.delete('/remove/:phoneId', authUser, removePhoneListing);

export default PhoneRouter;
