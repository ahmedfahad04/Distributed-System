const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Define the 'register' route and use the 'register' function as the route handler
router.post('/add', notificationController.addNotification);
router.get('/all', notificationController.showNotifications);

module.exports= router;