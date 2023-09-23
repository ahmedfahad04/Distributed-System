const Minio = require('minio');


// Set up MinIO client
let minioClient = null;

try {
  minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: '88mTq2UPXUg0ua6TJhla',
    secretKey: 'pPqc3KHHBlQjeOyvMtghhqGlh77162B1JR6YmOus',
  });
  console.log('Minio client connected successfully.');
} catch (error) {
  console.error('Error connecting to Minio:', error);
}


// Handle the image upload and store it on MinIO
const uploadImage = (req, res) => {

  if (!req.file) {
    return res.status(400).send('No image file found.');
  }

  const filePath = req.file.path;
  const metaData = {
    'Content-Type': req.file.mimetype,
  };

  const bucketName = 'distributed-system'; // Replace with your desired bucket name
  const objectName = req.file.originalname;

  minioClient.bucketExists(bucketName, (err, exists) => {
    if (err) {
      console.error('Error checking if the bucket exists:', err);
      // Handle the error
    } else if (exists) {
      console.log(`Bucket '${bucketName}' exists.`);
    } else {
      console.log(`Bucket '${bucketName}' does not exist.`);
    }
  });

  minioClient.fPutObject(bucketName, objectName, filePath, metaData, (err, etag) => {
    if (err) {
      console.log(err);
      return res.status(500).json( {message:'Error uploading the image.'});
    }

    console.log('Image uploaded successfully: ' + objectName);
    return res.status(200).json( {message:'Image uploaded successfully!!', etag:etag});
  });

};

module.exports = { uploadImage };