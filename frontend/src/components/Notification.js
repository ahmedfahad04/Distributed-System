import React from 'react';

function Notification({content}) {

  const handleNotification = () => {
    localStorage.setItem('p_id', content.p_id);
    window.location.href = '/specific';
  }

  return (
    <div>
        <p 
        className='text-lg pl-1 font-medium m-1 rounded-md text-black hover:bg-stone-200' 
        style={{ cursor: 'pointer' }} 
        onClick={handleNotification}>
          {content.content}
            <p 
            className='text-sm font-light'>
              {content.timestamp}
            </p>
        </p>
    </div>
  );
}

export default Notification;
