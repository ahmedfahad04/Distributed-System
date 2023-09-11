const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PostRoute = require('./routers/postRoute');
const ImageRoute = require('./routers/imageUploadRoute');
const dotenv = require('dotenv')
const cors = require('cors');


// connect mongodb
mongoose.connect('mongodb://post_db:27017/postdb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
})

db.once('open', () => {
    console.log('Post Database Connection Established!');
})

// mongoose_connection_path = 'mongodb://post_db:27017/postdb'

// mongoose.connect(mongoose_connection_path, (err) => {
//     if (!err) { console.log('MongoDB connection succeeded.'); }
//     else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
// });

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

// routes
app.use('/post', PostRoute);
app.use('/image', ImageRoute);