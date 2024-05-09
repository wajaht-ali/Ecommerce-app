/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/layout/Layout'

const Policy = () => {
  return (
    <Layout>
      <div className='w-full h-full flex flex-col justify-around py-4 text-black'>
        <h1 className='text-xl md:text-2xl font-bold text-blue-700 w-full text-center'>Privacy Policy</h1>
        <div className="p-3">
          <p>This Privacy Policy describes how  ("we", "us", or "our") collects, uses, and discloses your personal information when you use our website and services. We are committed to protecting your privacy and ensuring that your personal data is handled responsibly and securely.</p>

          <h2 className='text-lg font-semibold text-blue-500'> Information We Collect</h2>

          <p> When you use our e-commerce platform, we may collect the following types of information:</p>
          <ul >
            <li>
              Personal Information: When you register an account, place an order, or interact with our services, we may collect personal information such as your name, email address, shipping address, phone number, and payment details.
            </li>
            <li>
              Transaction Information: We collect details about your transactions on our platform, including the products you purchase, payment methods used, and shipping information.
            </li>
            <li>
              Device and Usage Information: We automatically collect information about how you interact with our website, such as your IP address, browser type, device type, and browsing history.
            </li>
            <li>
              Cookies and Tracking Technologies: We use cookies and similar tracking technologies to enhance your experience on our website and for analytics and marketing purposes. You can manage cookie preferences through your browser settings.
            </li>
          </ul>

          <h2 className='text-lg font-semibold text-blue-500'> How We Use Your Information</h2>
          <p> We use the information we collect for the following purposes:</p>
          <ul>
            <li>
              To process and fulfill your orders, including shipping and delivery.
            </li>
            <li>
              To communicate with you regarding your orders, account status, and promotions.
            </li>
            <li>
              To improve and personalize our services, content, and advertising.
            </li>
            <li>
              To prevent fraud and ensure the security of our platform.
            </li>
          </ul>


          <h2 className='text-lg font-semibold text-blue-500'> Data Sharing and Disclosure</h2>
          <p> We may share your personal information with third parties in the following circumstances:</p>
          <ul>
            <li>
              With service providers who help us operate our platform and provide essential services (e.g., payment processing, shipping).
            </li>
            <li>
              With analytics and marketing partners to understand and improve our business.
            </li>
            <li>
              - With law enforcement or government agencies when required by law or to protect our rights.
            </li>
          </ul>
        </div>
        <p className='p-3'>
          If you have any questions or concerns about our Privacy Policy or our practices regarding your personal information, please contact us.
        </p>
      </div>
    </Layout>
  )
}

export default Policy