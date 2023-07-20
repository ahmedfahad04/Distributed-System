import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
// import Navbar from './Navbar'

function RegistrationPage() {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');


  const submit = e => {
    e.preventDefault()
    console.log(name, email, phone, password)

    const formData = {
      name: name,
      email: email,
      phone: phone,
      password: password
    }

    axios.post("/user/register", formData)
    .then((response) => {
      
      // show the message from response json
      alert(response.data.message);
      window.location.href = '/login';
      
    });

  
    // Reset the form fields
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');

  }

  return (
    <Layout>
      {/* Whole page */}
      <section className="bg-gray-50 dark:bg-gray-900">
        {/* Placing the core items in the middle of screen */}
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          {/* Card wrapper */}
          <div className="w-full bg-[#f0f2f4] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            {/* Card content */}
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[#0065B3] md:text-2xl dark:text-white">
                Register here!
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">

                <div>
                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" name="name" id="name" value={name} onChange={event => setName(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required="" />
                </div>

                <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                  <input type="text" name="phone" id="phone" value={phone} onChange={event => setPhone(event.target.value)} placeholder="01766610054" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>

                <button type='submit' onClick={submit} className='bg-blue-800 hover:bg-blue-700 text-white w-full border-2 border-cyan-700 rounded-lg p-3 font-medium text-sm '> Register </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link to='/login' className="font-medium text-blue-800 hover:underline dark:text-primary-500 m-1">
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