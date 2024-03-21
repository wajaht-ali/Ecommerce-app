/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { FaBars, FaTimes, FaUser, } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";
import { useAuth } from '../../context/Auth';
import toast from 'react-hot-toast';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  }
  const handleClick = () => {
    setNav(!nav);
  }
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem('auth');
    navigate('/');
    toast.success("Logout Sucessfully!");
  }
  return (
    <div className='sticky top-0 w-full bg-black text-white flex flex-row items-center justify-between md:justify-around px-4 md:px-0 py-3 z-50 font-poppins'>
      <div className=''>
        <Link to={"/"} className='py-2 font-semibold text-md uppercase border-b-2 border-[#149EDC] transition-all'>News</Link>
      </div>

      <div className="nav_items hidden md:block">
        <ul className='flex flex-row items-center'>
          {/* <li>
            <Link className='border-[#149EDC] hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/">Home</Link>
          </li> */}
          <li>
            <Link className='border-[#FFD230] hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/about">About</Link>
          </li>
          <li>
            <Link className='border-[#FA6400] hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/product">Products</Link>
          </li>
          <li>
            <Link className='border-[#FF4C98] hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/category">Category</Link>
          </li>
          <li>
            <Link className='border-[#FF4C98] hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/contact">Contact</Link>
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
      <div className={!nav ? "hidden" : "nav_items absolute top-14 right-0  block md:hidden bg-black text-white w-full h-[220px] box-border z-50"}>
        <ul className='my-3 flex flex-col gap-4 items-center justify-evenly'>
          <li>
            <Link onClick={handleClick} className='active:border-blue-400 hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/">Home</Link>
          </li>
          <li>
            <Link onClick={handleClick} className='border-[#FFD230] hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/about">About</Link>
          </li>
          <li>
            <Link onClick={handleClick} className='border-[#149EDC] hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/category">Category</Link>
          </li>
          <li>
            <Link onClick={handleClick} className='border-blue-400 hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/products">Products</Link>
          </li>
          <li>
            <Link onClick={handleClick} className='border-blue-400 hover:border-b py-2 mx-4 font-semibold text-sm transition-all' to="/contact">Contact</Link>
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
          {
            !auth.user ? (
              <div>
                <Link to="/login" className='flex flex-row items-center px-2 py-2'>
                  <FaUser className='mx-3' size={15} />
                  Sign in
                </Link>
              </div>
            ) : (
              <div>
                <Link onClick={handleLogout} className='flex flex-row items-center px-2 py-2'>
                  <IoLogOutOutline className='mx-3' size={20} />
                  Logout
                </Link>
              </div>
            )
          }
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