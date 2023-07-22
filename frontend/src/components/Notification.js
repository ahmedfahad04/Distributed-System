import React from 'react';

function Notification() {

  // const handleMarkAsRead = () => {
  //   console.log('Mark as read');
  // };

  return (
    <div>
      {/* <div className='flex justify-center items-center'> */}
        <p className='text-md px-2 py-2 m-1 rounded-md text-black hover:bg-stone-200' style={{ cursor: 'pointer' }}>You have new notifications</p>
      {/* </div> */}
    </div>
  );
}

export default Notification;
