const Minio = require('minio');


// Set up MinIO client
const minioClient = new Minio.Client({
  endPoint: '192.168.43.91',
  port: 9000,
  useSSL: false,
  accessKey: 'mgVYctiomFevxMLKHnpI',
  secretKey: '21jfFr4SHhr4fiNP7IDpzAjhC7PHxu5mmtJa9mzH',
});


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