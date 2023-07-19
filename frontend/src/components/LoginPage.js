import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'
// import Navbar from './Navbar'

function LoginPage() {
    return (
        <Layout>

            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                {/* Card wrapper */}
                <div class="w-full bg-[#f0f2f4] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center">
                    {/* Card content */}
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold text-[#0065B3] md:text-2xl dark:text-white">
                            Login
                        </h1>

                        <div class="flex justify-center items-center mt-10">
                            <form>
                                <div class="w-80">
                                    <div class="mb-6">
                                        <label for="user_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>

                                        <input type="text" id="user_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                    </div>

                                    <div class="mb-6">
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>

                                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                    </div>
                                </div>
                                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Login
                                </button>
                            </form>
                        </div>

                        <div class="mt-5 flex flex-col items-center">
                            <p class="mt-2 text-gray-600 dark:text-gray-400">
                                Don't have an account?

                                {/* Linking */}
                                <Link to='/register' class="mx-1 text-blue-800 font-medium hover:underline">
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