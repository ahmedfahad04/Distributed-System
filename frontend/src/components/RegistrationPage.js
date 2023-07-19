import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'
// import Navbar from './Navbar'

function RegistrationPage() {
  return (
    <Layout>
      {/* Whole page */}
      <section class="bg-gray-50 dark:bg-gray-900">
        {/* Placing the core items in the middle of screen */}
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          {/* Card wrapper */}
          <div class="w-full bg-[#f0f2f4] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            {/* Card content */}
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-[#0065B3] md:text-2xl dark:text-white">
                  Register here!
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">

                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required=""/>
                  </div>

                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                      <input type="text" name="phone" id="phone" placeholder="01766610054" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>

                  <button type='submit' class='bg-blue-800 hover:bg-blue-700 text-white w-full border-2 border-cyan-700 rounded-lg p-3 font-medium text-sm '> Register </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? 
                      <Link to='/login' class="font-medium text-blue-800 hover:underline dark:text-primary-500 m-1">
                        Login 
                      </Link>
                      here
                  </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RegistrationPage