/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/v1/users/get-users");
      // console.log(res);
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

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/api/v1/users/delete-user/${id}`);
      if (res.data.success) {
        alert("User deleted sucessfylly!");
        getUsers();
      }
      else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(`Error with deleting user ${error}`);
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
          <div className='md:px-4 py-2 w-full text-[14px] md:text-base overflow-y-scroll'>
            <table className="table w-full">
              <thead>
                <tr className='bg-gray-400 text-white'>
                  <th className="py-2 md:px-4">Sr #</th>
                  <th className="py-2 md:px-4">Name</th>
                  <th className="py-2 md:px-4">Email</th>
                  <th className="py-2 md:px-4">Role</th>
                  <th className="py-2 md:px-4">Edit</th>
                  <th className="py-2 md:px-4">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item._id} className='bg-blue-100 text-center border-b-2 border-white'>
                    <td className="py-2 md:px-4">1</td>
                    <td className="py-2 md:px-4">{item.name}</td>
                    <td className="py-2 md:px-4">{item.email}</td>
                    <td className="py-2 md:px-4">{item.role}</td>

                    <td className="py-2 md:px-4"><Link className="bg-green-500 text-white py-1 px-2 rounded" to={`/admin/update-user/${item._id}`}>Edit</Link></td>

                    <td className="py-2 md:px-4"><Link className="bg-red-500 text-white py-1 px-2 rounded" onClick={(e) => handleDelete(item._id)}>Delete</Link></td>
                  </tr>
                ))}
                {/* <Outlet /> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Users