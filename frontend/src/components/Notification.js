import React from 'react';

function Notification({content}) {

  const handleNotification = () => {
    alert(content.p_id);    
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
