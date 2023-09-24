
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const imageUploadController = require('../controllers/imageUploadController');
const multer = require('multer');


// Define the 'register' route and use the 'register' function as the route handler
router.post('/create', postController.createPost);
router.get('/all', postController.showPosts);
router.post('/removepost', postController.deletePost);
router.post('/own', postController.showPostsByUser);

// Multer middleware to handle the file upload
const upload = multer({ dest: 'uploads/' });
router.post('/uploadIMG', upload.single('image'), imageUploadController.uploadImage);


module.exports = router;