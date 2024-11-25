require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fs = require('fs'); // Import fs module
const userRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productlistRoute');
const ProductList = require('./models/productlistModel');
const userDetailsRoutes = require('./routes/userDetailsRoutes');
const cartRoutes = require('./routes/cartRoute');
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Could not connect to MongoDB:', err);
    });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/uploadproductlist', async (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return res.status(500).send('Error reading the file');
        }

        const products = JSON.parse(data);

        ProductList.insertMany(products)
            .then(() => {
                console.log('Data imported successfully');
                res.status(200).send('Data imported successfully');
            })
            .catch((error) => {
                console.error('Error importing data:', error);
                res.status(500).send('Error importing data');
            });
    });
});

// Use user routes
app.use('/users', userRoutes);
app.use('/productlists', productRoutes);
app.use('/api', userDetailsRoutes);
app.use('/api', cartRoutes);
// Define the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

