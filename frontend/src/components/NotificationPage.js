import React from 'react';
import Notification from './Notification';

function NotificationPage({ showNotification }) {

  return (
    <div>

      {/* Floating notification window */}
      {showNotification && (
        <div className='bg-slate-500 text-white p-2 flex flex-col justify-center items-center fixed bottom-10 right-5 rounded-lg'>
            <Notification/>
            <Notification/>
            <Notification/>
        </div>
      )}
    </div>
  );
}

export default NotificationPage;
