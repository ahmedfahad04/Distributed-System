const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const notificationSchema = new Schema({
    p_id: {type: String},
    u_id: {type: String},
    content: {type: String},
    timestamp: {type: String},
    read: {type: Boolean, default: false}            // ****** newly added ****** //

}, {timestamps: true});

const notification = mongoose.model("Notification", notificationSchema);
module.exports = notification;