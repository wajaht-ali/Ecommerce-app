/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/layout/Layout.jsx';
import { useAuth } from '../context/Auth.jsx';
import SearchInput from './SearchInput.jsx';

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout className="border-2 border-black">
      <div className='w-full h-auto flex flex-col items-center py-4 text-black'>
        <div ><SearchInput /></div>
      </div>
    </Layout>
  )
}

export default Home