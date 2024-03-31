/* eslint-disable no-unused-vars */
import React from 'react'
import AdminMenu from '../../components/layout/AdminMenu'
import Layout from '../../components/layout/Layout'

const CreateProduct = () => {
  return (
    <Layout>
            <div className='w-full h-full flex flex-row items-center p-4'>
                <div className='border w-auto md:min-w-[20%] p-2 h-auto'>
                    <AdminMenu />
                </div>
                <div className='border min-w-[80%]'>
                    <h2 className='text-xl font-semibold select-none text-end'>Create Product</h2>
                </div>
            </div>
        </Layout>
  )
}

export default CreateProduct