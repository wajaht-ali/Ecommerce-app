/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';

import img from "https://www.bing.com/images/search?view=detailV2&ccid=Kp64As5h&id=D1080EB37853501FBA6BF271695CAF18908DE892&thid=OIP.Kp64As5hzlSiyL8IUw3jpgHaHa&mediaurl=https%3a%2f%2fthumbs.dreamstime.com%2fb%2fonline-shopping-app-logo-cart-icon-design-vector-232535148.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.2a9eb802ce61ce54a2c8bf08530de3a6%3frik%3dkuiNkBivXGlx8g%26pid%3dImgRaw%26r%3d0&exph=800&expw=800&q=shopping+app+logo&simid=608001790246265818&FORM=IRPRST&ck=8AE6D06B6E57F50C6B0D1AD89E2896FA&selectedIndex=5&itb=0&ajaxhist=0&ajaxserp=0";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#FCEED5] flex justify-center m-auto">
      <div className="w-full max-w-[90%] m-2 flex flex-col items-center justify-around">
        <div className='w-full flex flex-col md:flex-row md:justify-around gap-5 bg-[#003459] text-white p-4 rounded-lg font-openSans font-semibold'>
          <p className='text-lg md:text-xl'>Register Now So You Don&apos;t Miss <br /> Out Our Programs!</p>
          <div className=' text-black bg-white p-2 border-2 rounded-lg'>
            <input className='border-2 border-gray-500 rounded-lg w-full md:w-auto py-2 px-4 my-2 md:mx-3' type="email" id="email" placeholder='Enter Your Email' />
            <button className='bg-[#003459] text-white rounded-md py-2 px-2 w-full md:w-auto my-1 hover:bg-[#0b446c]'>Subscribe Now</button>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between py-4 my-2">
          <div className='py-2 md:px-4'>
            <ul className="flex flex-row items-center justify-around">
              <li>
                <Link className='p-2 mx-2 md:m-2 active:bg-red-100 rounded-sm font-semibold' to={"/"}>Home</Link>
              </li>
              <li>
                <Link className='p-2 mx-2 md:m-2 active:bg-red-100 rounded-sm font-semibold' to={"/category"}>Category</Link>
              </li>
              <li>
                <Link className='p-2 mx-2 md:m-2 active:bg-red-100 rounded-sm font-semibold' to={"/about"}>About</Link>
              </li>
              <li>
                <Link className='p-2 mx-2 md:m-2 active:bg-red-100 rounded-sm font-semibold' to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="py-2 px-4 flex flex-row items-center justify-center">
            <Link to={"https://www.facebook.com"} className="px-3 py-2 mx-3"><FaFacebookSquare size={25} /></Link>
            <Link to={"https://www.twitter.com"} className="px-3 py-2 mx-3"><FaTwitterSquare size={25} /></Link>
            <Link to={"https://www.instagram.com"} className="px-3 py-2 mx-3"><FaInstagramSquare size={25} /></Link>
            <Link to={"https://www.youtube.com"} className="px-3 py-2 mx-3"><FaYoutubeSquare size={25} /></Link>
          </div>
        </div>
        <div className='w-full border-b-2 border-gray-300 rounded-xl'></div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-2 font-openSans text-md">
          <div className='my-2 block md:hidden'>
            <Link to={"/"}>
              <img src={img} alt="myImage" width={"30px"} />
            </Link>
          </div>

          <div className='my-2'>
            <p>&copy;2024 Monito. All rights reserved</p>
          </div>

          <div className='my-2 hidden md:block'>
            <Link to={"/home"}>
              <img src={img} alt="myImage" width={"50px"} />
            </Link>
          </div>

          <div>
            <Link className='p-2' to={'/privacy'}>Privacy Policy</Link>
            <Link className='p-2' to={'/terms'}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer