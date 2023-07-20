// Layout.js
import React from 'react';
import Navbar from '../src/components/Navbar';

const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
