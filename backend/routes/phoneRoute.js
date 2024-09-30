import express from 'express'
import authUser from '../middleware/auth.js'
import { addPhone } from '../controllers/phoneController.js'



const PhoneRouter = express.Router()

PhoneRouter.post('/add',authUser ,addPhone)


export default PhoneRouter