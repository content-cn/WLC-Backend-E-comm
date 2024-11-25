// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const middleware = require('../middleware/requirelogin')
// Add an item to the cart
router.post('/cart',middleware, cartController.addItem);

// Update an item in the cart
router.put('/cart',middleware, cartController.updateItem);

// Get user's cart
router.get('/cart/:userId',middleware, cartController.getCart);

// Delete item from cart
router.delete('/cart',middleware, cartController.deleteItem);

module.exports = router;
