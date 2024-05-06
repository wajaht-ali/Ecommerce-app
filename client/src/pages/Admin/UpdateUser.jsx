/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout.jsx';
import AdminMenu from "../../components/layout/AdminMenu.jsx";

const UpdateUser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [password, setPassword] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const fetchUser = async (id) => {
                const res = await axios.get(`/api/v1/users/user/${id}`);
                if (res.data.success) {
                    const {name, email, phone, address} = res.data.user;
                    setName(name);
                    setEmail(email);
                    setPhone(phone);
                    setAddress(address);
                }
                else {
                    alert(res.data.message);
                }
            }
            fetchUser(id);
        } catch (error) {
            console.log(`Error with single user ${error}`);
        }
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`/api/v1/users/update-user/${id}`, {name, email, password, address, phone});
            if(res.data.success) {
                alert("User updated successfully!");
                navigate("/dashboard/admin/users");
            }
            else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(`Error with update user ${error}`);
        }
    }
    return (
        <Layout>
            <div className='w-full h-full flex flex-col md:flex-row justify-around py-4 text-black'>
                <div className='w-auto md:min-w-[200px] md:mr-2 md:border p-2 h-auto'>
                    <AdminMenu />
                </div>
                <div className='border w-full flex flex-col items-center justify-center'>
                    <h2 className='text-xl md:text-3xl px-4 py-4 font-semibold select-none text-start'>Update User</h2>

                    <form onSubmit={handleSubmit} className="w-[400px] border rounded-sm shadow-sm p-4">
                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="text" onChange={(e) => setName(e.target.value)} value={name} />
                        </div>

                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="email" onChange={(e) => setEmail(e.target.value)} disabled value={email}/>
                        </div>

                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="number" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                        </div>
                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="text" onChange={(e) => setAddress(e.target.value)} value={address}/>
                        </div>

                        <div className='flex flex-col'>
                            <input className='px-2 my-2 border-b border-black py-1 outline-none' type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter New password to update.."/>
                        </div>


                        <button onClick={handleSubmit} className="w-full bg-gray-800 text-white font-semibold py-2 rounded my-3 hover:bg-gray-100 hover:text-black hover:border hover:border-black uppercase">Update</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default UpdateUser