const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const NotificationRoute = require('./routers/notificationRouter');
const dotenv = require('dotenv')
const cors = require('cors');
require('./clearNotifications')     // run clearNotifications scheduler


// connect mongodb
mongoose.connect('mongodb://notification_db:27017/notfydb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
})

db.once('open', () => {
    console.log('Notificaton Database Connection Established!');
})
// mongoose_connection_path = 'mongodb://notification_db:27017/notifydb'

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
const PORT = process.env.PORT || 5020;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// env config
dotenv.config();

// middleware
app.use(cors());

// routes
app.use('/notify', NotificationRoute);