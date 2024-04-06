/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../../components/layout/Layout.jsx';
import AdminMenu from '../../components/layout/AdminMenu.jsx';
import { useAuth } from '../../context/Auth.jsx';

const API_KEY = import.meta.env.VITE_APP_API;

const AdminDashboard = () => {
    const [auth, setAuth] = useAuth();
    return (
        <Layout>
            <div className='w-full h-full flex flex-col md:flex-row justify-around py-4 text-black'>
                <div className='w-auto md:min-w-[200px] md:mr-2 md:border p-2 h-auto'>
                    <AdminMenu />
                </div>
                <div className='border w-full'>
                    <h2 className='text-xl md:text-3xl px-4 py-4 font-semibold select-none text-start'>Welcome back, {auth?.user?.name}</h2>
                    <div className='px-4'>
                    <p className='py-2 font-semibold'>Email: {auth?.user?.email}</p>
                    <p className='py-2 font-semibold'>Address: {auth?.user?.address}</p>
                    <p className='py-2 font-semibold'>Phone: {auth?.user?.phone}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard