// Assuming you have the necessary imports and setup for Express

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define the 'register' route and use the 'register' function as the route handler
router.post('/register', userController.register);
router.get('/all', userController.show);
// router.get('/users', userController.authenticate, userController.show);
router.post('/login',  userController.login);
router.post('/refresh-token', userController.refreshToken);
router.post('/remove', userController.remove);
router.get('/auth', userController.authenticate);

module.exports = router;
