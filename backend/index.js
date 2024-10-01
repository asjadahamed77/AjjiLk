import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
import PhoneRouter from './routes/phoneRoute.js';
import connectCloudinary from './config/cloudinary.js';


// App Config
const app = express();
const port = process.env.PORT || 8080;
connectDB();
connectCloudinary()



// Middleware
app.use(express.json()); // For parsing JSON bodies
app.use(cors()); // To enable CORS for cross-origin requests



// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/phone', PhoneRouter);

// Root route for testing
app.get('/', (req, res) => {
  res.send('API WORKING');
});

// Start the server
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
