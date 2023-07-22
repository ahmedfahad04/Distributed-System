import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
// import Navbar from './Navbar'

function LoginPage() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = (event) => {

        // Show the loading spinner while logging in
        setLoading(true);

        // Simulate a delay for the login process (you can replace this with your actual login API call)
        setTimeout(() => {
            // Perform the actual login process her

            setLoading(false);
        }, 1000); // Adjust the delay time as needed


        event.preventDefault(); // Prevent the default form submission behavior

        const formData = {
            username: username,
            password: password,
        };

        axios.post('/user/login', formData)
            .then((response) => {

                if (response.data.token) {
                    localStorage.setItem('accessToken', response.data.token);
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                    localStorage.setItem('username', response.data.username);
                    window.location.href = '/home';
                }
            })
            .catch((error) => {
                console.log(error);
            });

    };


    return (
        <Layout> 

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">

                {loading && (
                    <div className="flex items-center justify-center h-screen">
                        Loading...
                        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid">
                        </div>
                    </div>
                )}

                {/* Card wrapper */}
                <div className="w-full bg-[#f0f2f4] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center">

                    {/* Card content */}
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">


                        <h1 className="text-xl font-bold text-[#0065B3] md:text-2xl dark:text-white">
                            Login
                        </h1>

                        <div className="flex justify-center items-center mt-10">
                            <form>

                                <div className="w-80">
                                    <div className="mb-6">
                                        <label for="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email or Phone Number</label>
                                        <input type="text" id="user_name" value={username} onChange={event => setUserName(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                    </div>

                                    <div className="mb-6">
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                    </div>
                                </div>
                                <button type="submit" onClick={submit} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Login
                                </button>
                            </form>
                        </div>

                        <div className="mt-5 flex flex-col items-center">
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Don't have an account?

                                {/* Linking */}
                                <Link to='/register' className="mx-1 text-blue-800 font-medium hover:underline">
                                    Register
                                </Link>
                                here!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default LoginPage