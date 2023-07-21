import React, { useEffect, useState } from 'react';
import NotificationPage from './NotificationPage';

function Navbar({setLoading}) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleNotificationClick = () => {

    showNotification ? setShowNotification(false) : setShowNotification(true);
  };

  const onSignOut = () => {
    // Show the loading spinner before starting the logout process
    setLoading(true);

    // Simulate a delay for the logout process (you can replace this with your actual logout API call)
    setTimeout(() => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      window.location.href = '/';
    }, 1000); // Adjust the delay time as needed
  };


  return (

    <div>
      <nav class="bg-neutral-200">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

          <div class="relative flex h-16 items-center justify-between">

            {/* Conditional rendering for the logo */}
            {isLoggedIn ? (
              <div className="flex items-center justify-center sm:items-stretch sm:justify-center bg-grey-200">
                {/* Centered logo when logged out */}
                <img className="h-8 w-auto" src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png-1200x310.png" alt="Your Company" />
              </div>
            ) : (
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="flex flex-shrink-0 items-center justify-center">
                  {/* Smaller logo when logged in */}
                  <img className="h-10 w-auto" src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png-1200x310.png" alt="Your Company" />
                </div>
              </div>
            )}


            {isLoggedIn && (
              <div class='flex'>

                {/* Notification icon  */}
                {/* Pass the showNotification prop to the Notification component */}

                <NotificationPage showNotification={showNotification} onClose={() => setShowNotification(false)} />
                
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button type="button" onClick={handleNotificationClick} class="rounded-full bg-slate-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span class="sr-only">View notifications</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </button>
                </div>

                {/* Signout Button  */}
                <div class="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button type="button" onClick={onSignOut} class="rounded-full p-3 bg-blue-800 p-1 text-white hover:bg-blue-500 hover:text-grey-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    Signout
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>
      </nav>
    </div>

  );
}

export default Navbar;
