/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';
import Layout from '../../components/layout/Layout';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/api/v1/auth/register`, { name, email, phone, address, password });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
            }
            else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(`Error with register ${error}`);
        }
    }

    return (
        <Layout>
            <div className='h-screen text-black mx-auto flex flex-col items-center justify-center'>
                <div className='rounded-md mx-auto border-2 border-white p-4 shadow-lg shadow-black'>
                    <div className='my-2'>
                        <h2 className='uppercase font-bold text-2xl font-playfair text-center'>Sign Up</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} value={name} />
                        </div>

                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
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


                        <button onClick={handleSubmit} className="w-full bg-gray-800 text-white font-semibold py-2 rounded my-3 hover:bg-gray-100 hover:text-black hover:border hover:border-black uppercase">Submit</button>
                    </form>

                    <div className='my-2 w-full'>
                        <p className='mb-3'>Already have an account! </p>
                        <Link to="/login" className="bg-blue-500 text-white px-2 p-1 rounded-sm mt-3 hover:border hover:border-blue-600 hover:bg-white hover:text-blue-800">Login Here!</Link>
                    </div>
                </div>
                <div className='my-4'>
                    <p>Visit our <Link to={"/policy"}><code className="underline text-blue-700 hover:no-underline hover:text-black">privacy policy.</code></Link></p>
                </div>
            </div>
        </Layout>
    )
}

export default Register