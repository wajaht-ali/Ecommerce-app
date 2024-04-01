/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Toaster } from 'react-hot-toast';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '90vh' }}>
        {props.children}
        <Toaster />
      </main>
      <Footer />
    </div>
  )
}

export default Layout