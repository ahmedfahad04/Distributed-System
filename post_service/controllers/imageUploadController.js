const Minio = require('minio');

// Set up MinIO client
let minioClient = null;
try {
    minioClient = new Minio.Client({
      endPoint: "postobj",
      port: 9000,
      accessKey: "2yScPd5Ss5BGuEUk",
      secretKey: 'mOLBN9GwA75veIWlmYU0mhlTTWeUkqyg',
      useSSL:false
  });
  console.log("MINIO CONNECTION SUCCESSFUL")
} catch (error) {
  console.log('MINIO CONNECTION FAILED....', error)
}

// const minioClient = require('./minioClient');

// Handle the image upload and store it on MinIO
const uploadImage = (req, res) => {

  console.log("Inside Upload Image")

  if (!req.file) {
    return res.status(400).send('No image file found.');
  }

  const filePath = req.file.path;
  const metaData = {
    'Content-Type': req.file.mimetype,
  };

  // const bucketName = 'distributed-system'; // Replace with your desired bucket name

  const objectName = req.file.originalname;
  minioClient.fPutObject('distributed-system', objectName, filePath, metaData, (err, etag) => {
    if (err) {
      console.log(err);
      return res.status(500).json( {message:'Error uploading the image.'});
    }

    console.log('Image uploaded successfully: ' + objectName);
    return res.status(200).json( {message:'Image uploaded successfully!!', etag:etag});
  });

};

module.exports = { uploadImage };