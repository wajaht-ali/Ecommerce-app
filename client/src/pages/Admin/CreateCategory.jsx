/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';


const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const getAllCategories = async () => {
    try {
      const res = await axios.get(`/api/v1/category/get-category`, { name });
      // console.log(res)
      if (res.data.success) {
        setCategories(res.data.category);
      }
      else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(`Something went wrong with get categories`);
    }
  }
  useEffect(() => {
    getAllCategories();
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/category/create-category`, { name });
      // console.log(res)
      if (res?.data?.success) {
        setName("");
        alert("Category added sucessfully!");
        getAllCategories();
      }
      else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(`Error with create category ${error}`);
    }
  }

  const handleDelete = async (id) => {
    // e.preventDefault();
    try {
      const res = await axios.delete(`/api/v1/category/delete-category/` + id);
      console.log(res)
      if (res?.data?.success) {
        alert("Category deleted sucessfully!");
        getAllCategories();
      }
      else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(`Error with delete category ${error}`);
    }
  }
  return (
    <Layout>
      <div className='w-full h-full flex flex-col md:flex-row justify-around py-4 text-black'>
        <div className='w-auto md:min-w-[200px] md:mr-2 md:border p-2 h-auto'>
          <AdminMenu />
        </div>
        <div className='border w-full'>
          <h2 className='text-xl md:text-3xl px-4 py-4 font-semibold select-none text-start'>Manage Category</h2>
          <div className='border py-2'>
            <form className='p-4' onSubmit={handleSubmit}>
              <input type="text" className='border p-2 w-full md:w-[400px]' placeholder='Enter category name...' onChange={(e) => setName(e.target.value)} value={name} />
              <button type='submit' onClick={handleSubmit} className='px-4 py-2 my-2 border bg-blue-500 text-white rounded hover:bg-blue-400'>Submit</button>
            </form>
          </div>
          <div className='md:px-4 w-full'>
            <table className="table w-full text-start">
              <thead>
                <tr className='bg-gray-400'>
                  <th className="p-2 md:px-4 text-start">Category</th>
                  <th className="p-2 md:px-4 text-start">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item) => (
                  <tr key={item._id} className='bg-blue-100 border-b-2 border-white'>
                    <td className="p-2 py-4">{item.name}</td>
                    <td className="p-2 py-4">
                      <Link to={"#"} className="bg-green-300 mx-2 py-1 px-2 rounded">Edit</Link>
                      <button onClick={() => handleDelete(item._id)} className="bg-red-500 py-1 mx-2 px-2 rounded">Delete</button>
                    </td>
                  </tr>
                ))}
                <Outlet />
              </tbody >
            </table>
            {/* <Table /> */}
          </div>
        </div>

      </div>
    </Layout >
  )
}

export default CreateCategory