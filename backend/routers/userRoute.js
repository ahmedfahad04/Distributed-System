// Assuming you have the necessary imports and setup for Express

const express = require('express');
const router = express.Router();
const userController = require('../controllers/authController');

// Define the 'register' route and use the 'register' function as the route handler
router.post('/register', userController.register);
router.post('/users', userController.show);
router.post('/login', userController.login);

module.exports = router;
