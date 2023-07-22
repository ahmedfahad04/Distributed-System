const Notification = require('../models/notification');

const addNotification = (req, res) => {

    const { p_id, u_id, content, timestamp } = req.body;

    let notificationContent = new Notification({
        p_id: p_id,
        u_id: u_id,
        content: content,
        timestamp: timestamp
    })

    notificationContent.save()
    .then((savedpost) => {
        res.json({
            message: 'Notification Saved Successfully!',
        })
    })
    .catch(() => {
        res.json({
            message: 'Notification Creation Failed!'
        })
    })

}

const showNotifications = (req, res) => {

    Notification.find()
    .then((notifications) => {
        res.json({
            notifications
        })
    })
    .catch(() => {
        res.json({
            message: 'Notifications Fetching Failed!'
        })
    })
}

module.exports = { addNotification, showNotifications };
