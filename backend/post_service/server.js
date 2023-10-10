const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PostRoute = require('./routers/postRoute');
const dotenv = require('dotenv')
const cors = require('cors');
const minioClient = require('./controllers/minioClient')

// connect mongodb
mongoose.connect('mongodb://post_db:27017/postdb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
})

db.once('open', () => {
    console.log('Post Database Connection Established!');
})

// init app
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // handle data encoded in the URL
app.use(bodyParser.json()); // handle data encoded in json 

// listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// env config
dotenv.config();

// middleware
app.use(cors());

// ============== create bucket dynamically =================

const bucketName = "distributed-system";

(async () => {
    console.log(`Creating Bucket: ${bucketName}`);
    await minioClient.makeBucket(bucketName, "hello-there").catch((e) => {
        console.log(
            `Error while creating bucket '${bucketName}': ${e.message}`
        );
    });

    console.log(`Setting public access policy for bucket: ${bucketName}`);
    const policy = `
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": "*",
                "Action": [
                    "s3:GetObject"
                ],
                "Resource": [
                    "arn:aws:s3:::${bucketName}/*"
                ]
            }
        ]
    }`;

    await minioClient.setBucketPolicy(bucketName, policy).catch((e) => {
        console.log(
            `Error while setting bucket policy for '${bucketName}': ${e.message}`
        );
    });

    console.log(`Listing all buckets...`);
    const bucketsList = await minioClient.listBuckets();
    console.log(
        `Buckets List: ${bucketsList.map((bucket) => bucket.name).join(",\t")}`
    );
})();


// ============== create bucket dynamically =================


// routes
app.use('/post', PostRoute);
// app.use('/image', ImageRoute);