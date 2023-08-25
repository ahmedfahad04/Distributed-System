
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define the 'register' route and use the 'register' function as the route handler
router.post('/create', postController.createPost);
router.get('/all', postController.showPosts);
router.post('/removepost', postController.deletePost);
router.post('/own', postController.showPostsByUser)

module.exports = router;