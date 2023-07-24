const Notification = require('../models/notification');
const User = require('../models/user');

const addNotification = async (req, res) => {
  const { p_id, u_id, content, timestamp } = req.body;

  try {
    // Fetch all user IDs from the User model
    const users = await User.find({}, '_id');

    // Iterate over each user and save a notification
    for (const user of users) {

        if (user._id == u_id) {
            continue;
        }

      const notificationContent = new Notification({
        p_id: p_id,
        u_id: user._id,
        content: content,
        timestamp: timestamp,
        read: false,
      });

      await notificationContent.save();
    }

    res.json({
      message: 'Notifications Saved Successfully!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Notifications Creation Failed!',
    });
  }
};

const showNotifications = (req, res) => {
  Notification.find()
    .then((notifications) => {
      res.json({
        notifications,
      });
    })
    .catch(() => {
      res.json({
        message: 'Notifications Fetching Failed!',
      });
    });
};

const markAsReadNotification = async (req, res) => {
  try {
    const post_id = req.params.id;

    // Find the notification by ID
    const notification = await Notification.findOne({ p_id: post_id });

    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    // Update the notification status to read (or set it to true, depending on your data model)
    notification.read = true;

    // Save the updated notification
    await notification.save();

    // Return a success response
    return res.status(200).json({ message: 'Notification marked as read' });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: 'An error occurred while updating the notification' });
  }
};

const showParticularNotifications = (req, res) => {

    const u_id = req.params.id;
    Notification.find({u_id: u_id})
        .then((notifications) => {
            res.json({
                notifications,
            });
        })
        .catch(() => {
            res.json({
                message: 'Notifications Fetching Failed!',
            });
        });
};


module.exports = { addNotification, showNotifications, markAsReadNotification, showParticularNotifications };
