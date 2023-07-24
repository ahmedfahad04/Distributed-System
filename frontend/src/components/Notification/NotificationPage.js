import React from 'react';
import Notification from './Notification';

function NotificationPage({ showNotification, notifications }) {

  const currentUserId = localStorage.getItem('u_id');
  console.log('CURRENT NOT: ', notifications)

  return (
    <div>
      {/* Floating notification window */}
      {showNotification && (
        <div className="absolute right-20 top-5 m-12 w-3/6 bg-white border rounded-lg shadow-lg">
        {notifications.length === 0 || 
         (notifications.every((notify) => notify.u_id !== currentUserId)) ? (
          <p className="text-center py-2">No notification available</p>
        ) : (
          notifications
            .map((notification, index) => (
              <div
                key={index}
                className="w-6/6 text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
              >
                <Notification content={notification} />
              </div>
            ))
        )}
      </div>
      )}
    </div>
  );
}

export default NotificationPage;
