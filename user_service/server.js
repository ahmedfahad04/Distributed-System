const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const UserRoute = require('./routers/userRoute');
const dotenv = require('dotenv')
const cors = require('cors');


// connect mongodb (localhost will be replaced with 'mongo' for dockerization)
mongoose.connect('mongodb://user_db:27017/userdb', { useNewUrlParser: true, useUnifiedTopology: true, directConnection: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
})

db.once('open', () => {
    console.log('User Database Connection Established!');
})

// init app
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // handle data encoded in the URL
app.use(bodyParser.json()); // handle data encoded in json 

// listen for requests
const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// env config
dotenv.config();

// middleware
app.use(cors());

// routes
app.use('/user', UserRoute);