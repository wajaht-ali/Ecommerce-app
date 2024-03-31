/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const UserMenu = () => {
    const [sidenav, setSidenav] = useState(false);
    const toggleNav = () => {
        setSidenav(!sidenav);
    }
    return (
        <div className=''>
            <div onClick={toggleNav} className='block md:hidden'>
                {!sidenav ? <FaBars /> : <FaTimes />}
            </div>
            <div className={!sidenav ? "hidden" : "nav_items absolute top-100 left-1  block md:hidden bg-blue-200 py-4 px-2 rounded-lg h-[400px] box-border"}>
                <h2 className='text-2xl text-center font-semibold mb-4'>User Menu</h2>
                <div className='flex flex-col justify-around'>
                    <Link className='hover:bg-gray-50 border-white border-b-2 rounded-sm p-2 w-full' to={'/dashboard/user'}>Home</Link>
                    <Link className='hover:bg-gray-50 border-white border-b-2 rounded-sm p-2 w-full' to={'/dashboard/user/profile'}>Profile</Link>
                    <Link className='hover:bg-gray-50 border-white border-b-2 rounded-sm p-2 w-full' to={'/dashboard/user/orders'}>Orders</Link>
                    {/* <Link className='hover:bg-gray-50 border-white border-b-2 rounded-sm p-2 w-full' to={'/dashboard/admin/users'}>Users</Link> */}
                </div>
            </div>
            <div className='hidden md:block'>
                <h2 className='text-2xl text-center font-semibold mb-4'>User Menu</h2>
                <div className='flex flex-col justify-around'>
                    <Link className='hover:bg-gray-50 border-white border-b-2 rounded-sm p-2 w-full' to={'/dashboard/user'}>Home</Link>
                    <Link className='hover:bg-gray-50 border-white border-b-2 rounded-sm p-2 w-full' to={'/dashboard/user/profile'}>Profile</Link>
                    <Link className='hover:bg-gray-50 border-white border-b-2 rounded-sm p-2 w-full' to={'/dashboard/user/orders'}>Orders</Link>
                    {/* <Link className='hover:bg-gray-100 border-b rounded-sm p-2 w-full' to={'/dashboard/admin/users'}>Users</Link> */}
                </div>
            </div>
        </div>
    )
}

export default UserMenu