import React from 'react';

function Notification() {

  // const handleMarkAsRead = () => {
  //   console.log('Mark as read');
  // };

  return (
    <div>
      <div className='flex justify-center items-center'>
        <p className='text-lg p-2 border-2 text-black hover:bg-blue-100' style={{ cursor: 'pointer' }}>You have new notifications</p>

        {/* Mark as read icon from assets */}
        {/* <img
          src={TickLogo}
          alt='tick logo'
          className='h-4 w-4 ml-2'
          onClick={handleMarkAsRead}
          style={{ cursor: 'pointer' }}
        /> */}
      </div>
    </div>
  );
}

export default Notification;
