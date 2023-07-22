import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NotificationPage from './NotificationPage';

function Navbar({ setLoading }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const [notifications, setNotifications] = useState([]); // Set initial value as an empty array

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    // get all posts
    axios
      .get('/notify/all')
      .then((response) => {
        console.log("Notification: ",response.data.notifications);
        setNotifications(response.data.notifications); // Set the state with the response data
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNotificationClick = () => {
    showNotification ? setShowNotification(false) : setShowNotification(true);
  };

  const handleDropdownClick = () => {
    setShowDropdown((prevState) => !prevState); // Toggle the user dropdown
  };

  // const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

  const onSignOut = () => {
    // Show the loading spinner before starting the logout process
    setLoading(true);

    // Simulate a delay for the logout process (you can replace this with your actual logout API call)
    setTimeout(() => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('u_id');
      localStorage.removeItem('username')
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
                    <div className="px-2 flex space-between">
                      <svg width="20px" height="20px" viewBox="0 -2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75Z" fill="#1C274C" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.5456 3.77827 16.851 5.4421 18.5235C5.6225 17.5504 5.97694 16.6329 6.68837 15.8951C7.75252 14.7915 9.45416 14.25 12 14.25C14.5457 14.25 16.2474 14.7915 17.3115 15.8951C18.023 16.6329 18.3774 17.5505 18.5578 18.5236C20.2217 16.8511 21.25 14.5456 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM17.1937 19.6554C17.0918 18.4435 16.8286 17.5553 16.2318 16.9363C15.5823 16.2628 14.3789 15.75 12 15.75C9.62099 15.75 8.41761 16.2628 7.76815 16.9363C7.17127 17.5553 6.90811 18.4434 6.80622 19.6553C8.28684 20.6618 10.0747 21.25 12 21.25C13.9252 21.25 15.7131 20.6618 17.1937 19.6554Z" fill="#1C274C" />
                      </svg>
                      <p className='ml-2'>{localStorage.getItem('username')}</p>
                    </div>
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
                        Logout
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
