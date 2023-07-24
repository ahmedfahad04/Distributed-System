const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Define the 'register' route and use the 'register' function as the route handler
router.post('/add', notificationController.addNotification);
router.get('/all', notificationController.showNotifications);
router.get('/:id', notificationController.showParticularNotifications);
router.post('/markAsRead/:id', notificationController.markAsReadNotification);

module.exports= router;