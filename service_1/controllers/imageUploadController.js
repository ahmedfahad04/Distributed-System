const Minio = require('minio');


// Set up MinIO client
const minioClient = new Minio.Client({
  endPoint: '192.168.0.119',
  port: 9000,
  useSSL: false,
  accessKey: 'gzrTDeFKHhZgP4VhUFGi',
  secretKey: 'Siq8TfbHr5cYF3b3U2jvlmUKNUurnxtG0qLQtbsK',
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