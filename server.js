// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const cors = require('cors'); // CORS middleware
const mongoose = require('mongoose'); // Mongoose for MongoDB


// Initialize the Express app
const app = express();


// Middleware Setup
app.use(express.json()); // Body parsing middleware
app.use(cors()); // CORS middleware


// MongoDB Connection using the URI from environment variables
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Could not connect to MongoDB:', err);
});

// Define the port using environment variable
const PORT = process.env.PORT || 5000; // Default to 5000 if not specified in .env

app.get('/', (req, res) => {
    res.send('Middleware is set up!');
});


// Example POST Route - Handle incoming JSON data
app.post('/data', (req, res) => {
    const { name, age } = req.body; // Destructure incoming JSON data
    console.log(`Received: Name = ${name}, Age = ${age}`);


    // Send a response back to the client
    res.status(201).json({ message: 'Data received successfully', data: { name, age } });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
