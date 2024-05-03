/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import UserMenu from '../../components/layout/UserMenu.jsx';
import { useAuth } from "../../context/Auth.jsx";


const UpdateUser = () => {
    const [auth, setAuth] = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const res = await axios.put('/api/v1/auth/profile', { name, email, password, address, phone });
    //       if (res.data.error) {
    //         alert("Something went wrong!");
    //       }
    //       else {
    //         setAuth({ ...auth, user: res.data.updatedUser });
    //         let ls = localStorage.getItem('auth');
    //         ls = JSON.parse(ls);
    //         ls.user = res.data.updatedUser;
    //         localStorage.setItem('auth', JSON.stringify(ls));
    //         navigate('/dashboard/user');
    //       }
    //     } catch (error) {
    //       console.log(`Error with update user ${error}`);
    //     }
    //   }
    const handleSubmit = async () => {
        try {
            // const user;
        } catch (error) {
            console.log(`Error with update user ${error}`);
        }
    }
    return (
        <Layout>
            <div className='w-full h-full flex flex-col md:flex-row justify-around py-4 text-black'>
                <div className='w-auto md:min-w-[200px] md:mr-2 md:border p-2 h-auto'>
                    <UserMenu />
                </div>
                <div className='border w-full flex flex-col items-center justify-center'>
                    <h2 className='text-xl md:text-3xl px-4 py-4 font-semibold select-none text-start'>Update User</h2>

                    <form onSubmit={handleSubmit} className="w-[400px] border rounded-sm shadow-sm p-4">
                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} value={name} />
                        </div>

                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} disabled />
                        </div>

                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="number" placeholder='Enter Phone No' onChange={(e) => setPhone(e.target.value)} value={phone} />
                        </div>
                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="text" placeholder='Enter Address' onChange={(e) => setAddress(e.target.value)} value={address} />
                        </div>

                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>


                        <button onClick={handleSubmit} className="w-full bg-gray-800 text-white font-semibold py-2 rounded my-3 hover:bg-gray-100 hover:text-black hover:border hover:border-black uppercase">Update</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default UpdateUser