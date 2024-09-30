import express from 'express'
import { loginUser,adminLogin,registerUser } from '../controllers/userController.js'
import authUser from '../middleware/auth.js'


const userRouter = express.Router()

userRouter.post('/signup',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)
userRouter.post('/userdetails',authUser,loginUser)

export default userRouter