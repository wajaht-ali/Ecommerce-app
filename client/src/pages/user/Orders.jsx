/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../../components/layout/Layout'
import UserMenu from '../../components/layout/UserMenu'


const Orders = () => {
  return (
    <Layout>
      <div className='w-full h-full flex flex-row items-center p-4'>
        <div className='border w-auto md:min-w-[20%] p-2 h-auto'>
          <UserMenu />
        </div>
        <div className='border min-w-[80%]'>
          <h2 className='text-xl font-semibold select-none text-end'>Orders</h2>
        </div>
      </div>
    </Layout>
  )
}

export default Orders