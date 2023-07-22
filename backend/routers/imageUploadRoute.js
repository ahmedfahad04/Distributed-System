const express = require('express');
const router = express.Router();
const imageUploadController = require('../controllers/imageUploadController');
const multer = require('multer');

// Multer middleware to handle the file upload
const upload = multer({ dest: 'uploads/' });
router.post('/uploadIMG', upload.single('image'), imageUploadController.uploadImage);

module.exports = router;