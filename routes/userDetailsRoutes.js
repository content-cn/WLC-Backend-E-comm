const express = require('express');
const router = express.Router();
const UserDetails = require('../models/userDetailsModel');
const User = require('../models/authModel');
const userDetailsController = require('../controllers/userDetailsController')

// Route to get user details by ID
router.get('/userdetails/:id',userDetailsController.getUerDetails )

router.post('/userdetails', userDetailsController.postUserDetails);

  // Route to update user details by ID
router.put('/userdetails/:id',userDetailsController.updateUserDetails );
  
module.exports = router;