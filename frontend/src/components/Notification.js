import React from 'react';
import TickLogo from '../assets/tick_mark.svg';

function Notification() {

  const handleMarkAsRead = () => {
    console.log('Mark as read');
  };

  return (
    <div>
      <div className='flex justify-center items-center'>
        <p className='text-lg'>You have new notifications</p>

        {/* Mark as read icon from assets */}
        <img
          src={TickLogo}
          alt='tick logo'
          className='h-4 w-4 ml-2'
          onClick={handleMarkAsRead}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}

export default Notification;
