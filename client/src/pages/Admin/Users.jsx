/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'


const Users = () => {
  return (
    <Layout>
      <div className='w-full h-full flex flex-col md:flex-row justify-around py-4 text-black'>
        <div className='w-auto md:min-w-[200px] md:mr-2 md:border p-2 h-auto'>
          <AdminMenu />
        </div>
        <div className='border w-full'>
          <h2 className='text-xl md:text-3xl px-4 py-4 font-semibold select-none text-start'>All Users</h2>
        </div>
      </div>
    </Layout>
  )
}

export default Users