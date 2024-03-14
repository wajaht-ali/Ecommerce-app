/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { FaBars, FaTimes, FaUser, } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
// import { AppContext } from '../App';
// import axios from 'axios';

const Header = () => {
  // const user = useContext(AppContext);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  const handleClick = () => {
    setNav(!nav);
  }
  // const handleLogout = () => {
  //   axios.get("http://localhost:8000/auth/logout")
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data === "Success") {
  //         window.location.href = "/";
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }
  return (
    <div className='sticky top-0 w-full bg-black text-white flex flex-row items-center justify-between md:justify-around px-4 md:px-0 py-3 z-50 font-poppins'>
      <div className=''>
        <Link to={"/"} className='py-2 font-semibold text-md uppercase border-b-2 border-[#149EDC] transition-all'>News</Link>
      </div>

      <div className="nav_items hidden md:block">
        <ul className='flex flex-row items-center'>
          <li>
            <Link className='border-[#149EDC] hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/">Home</Link>
          </li>
          <li>
            <Link className='border-[#FFD230] hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/news">News</Link>
          </li>
          <li>
            <Link className='border-[#FA6400] hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/business">Business</Link>
          </li>
          <li>
            <Link className='border-[#FF4C98] hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/sports">Sports</Link>
          </li>
          <li>
            <Link className='border-blue-400 hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/world">World</Link>
          </li>
          {/* {
            user.role === "author" ?
              <li>
                <Link className='border-blue-400 hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/author">Author</Link>
              </li>
              :
              <></>
          } */}

          {/* {
            user.role === "admin" ?
              <li>
                <Link className='border-blue-400 hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/admin">Admin</Link>
              </li>
              :
              <></>
          } */}

        </ul>
      </div>

      {/* Mobile navbar */}
      <div className={!nav ? "hidden" : "nav_items absolute top-14 right-0  block md:hidden bg-black text-white w-full h-[190px] box-border z-50"}>
        <ul className='grid gap-5 my-3 grid-cols-2 place-items-center'>
          <li>
            <Link onClick={handleClick} className='active:border-blue-400 hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/">Home</Link>
          </li>
          <li>
            <Link onClick={handleClick} className='border-[#FFD230] hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/news">News</Link>
          </li>
          <li>
            <Link onClick={handleClick} className='border-[#149EDC] hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/business">Business</Link>
          </li>
          <li>
            <Link onClick={handleClick} className='border-blue-400 hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/sports">Sports</Link>
          </li>
          <li>
            <Link onClick={handleClick} className='border-blue-400 hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/world">World</Link>
          </li>
          {/* {
            user.role === "author" ?
              <li>
                <Link onClick={handleClick} className='border-blue-400 hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/author">Author</Link>
              </li>
              :
              <></>
          }
          {
            user.role === "admin" ?
              <li>
                <Link onClick={handleClick} className='border-blue-400 hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/admin">Admin</Link>
              </li>
              :
              <></>
          } */}
        </ul>
      </div>

      <div className="right flex flex-row items-center md:border-l-2 border-gray-800">
        <div className='sig_in mx-2 md:m-0'>
          <div>
            {/* {
              user.role ?
                <Link onClick={handleLogout} className='flex flex-row items-center px-2 py-2'>
                  <MdLogout className='mx-3' size={15} />
                  Logout
                </Link>
                :
            } */}
            <Link to="/login" className='flex flex-row items-center px-2 py-2'>
              <FaUser className='mx-3' size={15} />
              Sign in
            </Link>
          </div>
        </div>

        {/* shopping cart */}
        <div className="right flex items-center md:ml-3 border-gray-800">
          <Link to="cart"><IoCartOutline size={30} /></Link>
        </div>
        <div onClick={handleNav} className="p-3 mx-2 block md:hidden hamburger cursor-pointer">
          {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>
      </div>

    </div>
  )
}

export default Header;