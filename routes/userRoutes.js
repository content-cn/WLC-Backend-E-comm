// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// Define routes
router.get('/', userController.getAllUsers); // GET all users
router.post('/', userController.addUser); // POST a new user


// Export the router
module.exports = router;
