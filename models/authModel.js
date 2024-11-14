// models/userModel.js
const mongoose = require('mongoose');
// Define the User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
email:{type:String , required:true},
password:{type:String , required:true}
});
// Create a User Model
const User = mongoose.model('User', userSchema);
module.exports = User; // Export the User model