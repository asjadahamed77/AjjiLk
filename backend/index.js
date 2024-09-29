import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import userRouter from './routes/userRoutes.js'

// App Config
const app = express()
const port = process.env.PORT || 8080
connectDB()

//middlewares
app.use(express.json())
app.use(cors())


// API Endpoints
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("API WORKING")
})


app.listen(port, ()=> console.log("Server started on PORT: "+port))