import React from 'react';
import TickLogo from '../assets/tick_mark.svg';

function Notification() {

  const handleMarkAsRead = () => {
    console.log('Mark as read');
  }
  return (
    <div>
      {/* notification bar */}
      <div class='bg-slate-500 text-white p-2 flex justify-center items-center'>
        <div class='flex justify-center items-center'>
          <p class='text-lg'>You have new notifications</p>
         
          {/* mark as read icon from assets */}
          <img src={TickLogo} alt='tick logo' class='h-4 w-4 ml-2' onClick={handleMarkAsRead} style={{cursor: 'pointer'}}/>
          
          </div>
      </div>
    </div>
  )
}

export default Notification