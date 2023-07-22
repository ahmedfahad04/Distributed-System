import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import MyPost from './components/MyPost';
import RegistrationPage from './components/RegistrationPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegistrationPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/home",
    element: <HomePage />,
  },

  {
    path: "/own",
    element: <MyPost />,
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router}/>
);
