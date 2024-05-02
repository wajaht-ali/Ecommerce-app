/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import axios from 'axios';


const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/v1/users/get-users");
      console.log(res);
      if (res.data.success) {
        setUsers(res.data.users)
      }
      else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(`Error with getting users: ${error}`);
    }
  }
  useEffect(() => {
    getUsers();
  }, [])
  return (
    <Layout>
      <div className='w-full h-full flex flex-col md:flex-row justify-around py-4 text-black'>
        <div className='w-auto md:min-w-[200px] md:mr-2 md:border p-2 h-auto'>
          <AdminMenu />
        </div>
        <div className='border w-full'>
          <h2 className='text-xl md:text-3xl px-4 py-4 font-semibold select-none text-start'>All Users</h2>
          <div>
            { }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Users