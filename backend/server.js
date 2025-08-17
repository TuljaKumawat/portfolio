const express = require('express')
const app = express()
const cors = require('cors')
const contactRouter = require('./routers/contactRouter')
require('dotenv').config()

// app.use(cors({ origin: 'http://localhost:3000' // "https://portfolio-frontend-jim0.onrender.com " })); // adjust as needed
// app.use(express.json());

const allowedOrigins = [
    'http://localhost:3000', // For local development
    'https://portfolio-frontend-jim0.onrender.com' // For your deployed frontend
];

// Configure CORS to allow requests from the defined origins
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());




app.use('/api/Contact', contactRouter)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`server is running on PORT ${PORT}`));
