import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'

// App Config
const app = express()
const port = process.env.PORT || 6000
connectDB()

//middlewares
app.use(express.json())
app.use(cors())


// API Endpoints

app.get('/',(req,res)=>{
    res.send("API WORKING")
})


app.listen(port, ()=> console.log("Server started on PORT: "+port))