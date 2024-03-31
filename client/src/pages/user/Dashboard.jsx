/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../../components/layout/Layout.jsx';
import { useAuth } from '../../context/Auth.jsx';
import UserMenu from '../../components/layout/UserMenu.jsx';

const Dashboard = () => {
    const [auth, setAuth] = useAuth();
    return (
        <Layout>
            <div className='w-full h-full flex flex-row items-center p-4'>
                <div className='border w-auto md:min-w-[20%] p-2 h-auto'>
                    <UserMenu />
                </div>
                <div className='border min-w-[80%]'>
                    <h2 className='text-xl font-semibold select-none text-end'>Welcome back, {auth?.user?.name}</h2>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard