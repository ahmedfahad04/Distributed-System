import React, { useEffect, useState } from 'react';
import NotificationPage from './NotificationPage';

function Navbar({ setLoading }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

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

  const handleDropdownClick = () => {
    setShowDropdown((prevState) => !prevState); // Toggle the user dropdown
  };

  const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

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

                {/* User name  */}
                {/* <div className='flex text-blue-800 font-medium items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  {localStorage.getItem('username')}
                </div> */}

                {/* Notification Window  */}
                <NotificationPage showNotification={showNotification} notifications={notifications} />

                {/* Notification Icon  */}
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button type="button" onClick={handleNotificationClick} class="shadow-md rounded-md bg-white p-2 hover:bg-stone-300 text-gray-400 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-gray-800">
                    {/* <span class="sr-only">View notifications</span> */}
                    <svg class="h-6 w-6" fill="#0077B5" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </button>
                </div>

                {/* dropdown menu  */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={handleDropdownClick}
                    className="rounded-md flex px-3 py-2 m-2 shadow-md bg-white p-1 text-slate-800 hover:bg-stone-300 hover:text-[#0077B5] font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <div className="px-2">{localStorage.getItem('username')}</div>
                    <svg
                      className="h-6 w-6"
                      fill="blue"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width="10px" height="10px" xmlns="http://www.w3.org/2000/svg"
  
                    >
                      <rect x="0" fill="none" width="24" height="24" />

                      <g>

                        <path d="M7 10l5 5 5-5" />

                      </g>
                    </svg>
                  </button>

                  {/* Dropdown Content */}
                  {showDropdown && (

                    <div className="absolute right-0 mt-2 w-32  bg-white border rounded-lg shadow-lg">
                      <button
                        onClick={onSignOut}
                        className="px-4 py-2 w-32 text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
                      >
                        Signout
                      </button>
                    </div>
                  )}
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
