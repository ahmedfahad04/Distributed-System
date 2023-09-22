const cron = require('node-cron');
const Notification = require('./models/notification');

// Function to clear notifications with read status set to true
async function clearReadNotifications() {
  try {
    await Notification.deleteMany({ read: true });
    console.log('Cleared read notifications');
  } catch (error) {
    console.error('Error clearing notifications:', error);
  }
}

// Schedule the job to run every 30 minute
cron.schedule('*/200 * * * * *', clearReadNotifications); // second, minute, hour, day of month, month, day of week
