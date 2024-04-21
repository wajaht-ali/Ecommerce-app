/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/layout/Layout.jsx';
import SearchInput from './SearchInput.jsx';
import { Link } from 'react-router-dom';
import img from '../assets/OIP.jpeg';
import img1 from "../assets/kids_coll.jpeg";
import img2 from "../assets/mens_coll.jpg";
import img3 from "../assets/women_coll.jpeg";

const Home = () => {

  return (
    <Layout className="border-2 border-black">
      <div className='w-full h-auto flex flex-col items-center py-4 text-black'>
        <div ><SearchInput /></div>
        <section className="py-28">
          <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
            <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
              <h1 className="text-sm text-indigo-600 font-medium">
                Over 200 successful deals
              </h1>
              <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                Find your favourite brands, on your single tap.
              </h2>
              <p>
                E-shopping is a online shopping stroe, serving you the best quality products at your door step.
              </p>
              <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <Link to="/products" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                  View Category
                </Link>
                <Link to="/products" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                  Products
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
              <img
                src={img}
                className=" md:rounded-tl-[108px]"
                alt=""
              />
            </div>
          </div>
          <div className="mt-14 px-4 md:px-8">
            <p className="text-center text-xl md:text-2xl text-black font-bold">Featured Categories</p>
            <div className="flex justify-center md:justify-around items-center flex-wrap gap-x-12 gap-y-6 mt-6">
              <Link to="/products">
                <div >
                  <img className='w-[150px] h-[150px] object-contain rounded-md' src={img1} alt="Image" />
                  <h2 className="font-semibold text-lg">Kids Collection</h2>
                </div></Link>
              <Link to="/products">
                <div >
                  <img className='w-[150px] h-[150px] object-contain rounded-md' src={img2} alt="Image" />
                  <h2 className="font-semibold text-lg">Men Collection</h2>
                </div></Link>
              <Link to="/products">
                <div >
                  <img className='w-[150px] h-[150px] object-contain rounded-md' src={img3} alt="Image" />
                  <h2 className="font-semibold text-lg">Women Collection</h2>
                </div></Link>
            </div>
            <button className='my-8 w-full mx-auto'>
              <Link to="/products" className='text-white bg-blue-600 hover:bg-blue-500 rounded-md text-lg py-2 px-3'>View More</Link>
            </button>
          </div>
          <div className="mt-14 px-4 md:px-8">
            <p className="text-center text-xl md:text-2xl text-black font-bold">Featured Products</p>
            <div className="flex justify-center md:justify-around items-center flex-wrap gap-x-12 gap-y-6 mt-6"></div>
            <button className='my-8 w-full mx-auto'>
              <Link to="/products" className='text-white bg-blue-600 hover:bg-blue-500 rounded-md text-lg py-2 px-3'>View More</Link>
            </button>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home