/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Layout from '../../components/layout/Layout';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/Auth';

const API_KEY = import.meta.env.VITE_APP_API;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // axios.defaults.withCredentials = true;
            const res = await axios.post(`${API_KEY}/api/v1/auth/login`, { email, password });
            if (res && res.data.success) {
                toast.success(res && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate('/');
            }
            else {
                toast.error(res && res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }
    }

    return (
        <Layout>
            <div className=' h-screen w-full text-black mx-auto flex items-center justify-center'>
                <div className='rounded-md mx-auto border-2 border-white p-4 shadow-lg shadow-black'>
                    <div className='my-2'>
                        <h2 className='uppercase font-bold text-2xl font-playfair text-center'>Sign In</h2>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>

                        <button onClick={handleSubmit} className="w-full bg-gray-800 text-white font-semibold py-2 rounded my-3 hover:bg-gray-100 hover:text-black hover:border hover:border-black">Login</button>
                    </form>

                    <div className='my-2 w-full'>
                        <p className='mb-3'>Dont&apos;t have an account! </p>
                        <Link to="/register" className="bg-blue-500 text-white px-2 p-1 rounded-sm mt-3 hover:border hover:border-blue-600 hover:bg-white hover:text-blue-800">Create One!</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login