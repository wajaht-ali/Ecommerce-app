/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/layout/Layout.jsx';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <Layout >
            <div className='w-full h-screen flex flex-col items-center justify-center'>
                <h1 className='text-4xl md:text-8xl font-bold my-2'>404</h1>
                <p className='text-3xl font-semibold my-2'>Oops! Page Not Found</p>
                <Link className="bg-gray-950 text-white p-2 mt-3 hover:shadow-md hover:shadow-black" to={'/'}>Go Back</Link>
            </div>
        </Layout>
    )
}

export default PageNotFound