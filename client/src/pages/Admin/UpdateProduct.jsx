/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/layout/AdminMenu'
import Layout from '../../components/layout/Layout'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateProduct = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [shipping, setShipping] = useState("");
    const [category, setCategory] = useState("");
    const [photo, setPhoto] = useState("");
    const [id, setId] = useState("");
    const { slug } = useParams();

    const getAllCategories = async () => {
        try {
            const res = await axios.get(`/api/v1/category/get-category`);
            if (res?.data?.success) {
                setCategories(res?.data?.category);
            }
            else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(`Eror with get categories ${error}`);
        }
    }

    const getProductById = async () => {
        try {
            const res = await axios.get(`/api/v1/product/get-product/${slug}`);
            if (res.data.success) {
                setName(res.data.product.name);
                setDescription(res.data.product.description);
                setQuantity(res.data.product.quantity);
                setPrice(res.data.product.price);
                setCategory(res.data.product.category);
                setShipping(res.data.product.shipping);
                setId(res.data.product._id)
            }
            else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(`Error with get product by id ${error}`);
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const formdata = new FormData();
            formdata.append("name", name);
            formdata.append("description", description);
            formdata.append("category", category);
            formdata.append("price", price);
            formdata.append("quantity", quantity);
            formdata.append("shipping", shipping);
            photo && formdata.append("photo", photo);
            
            const res = await axios.put(`/api/v1/product/update-product/${id}`, formdata);
            // console.log(res)
            if (res.data.success) {
                alert("Product updated sucessfully.");
                navigate('/dashboard/admin/products')
            }
            else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(`Error with form data ${error}`)
        }
    }
    
    useEffect(() => {
        getProductById();
    }, [])

    useEffect(() => {
        getAllCategories();
    }, [])

    return (
        <Layout>
            <div className='w-full h-full flex flex-col md:flex-row justify-around py-4 text-black'>
                <div className='w-auto md:min-w-[200px] md:mr-2 md:border p-2 h-auto'>
                    <AdminMenu />
                </div>
                <div className='border w-full'>
                    <h2 className='text-xl md:text-3xl px-4 py-4 font-semibold select-none text-start'>Update Product</h2>
                    <div className='w-full px-4'>
                        <form onSubmit={handleUpdate}>
                            <div className='w-full md:max-w-[50%] my-2'>
                                <select name="category" onChange={(e) => setCategory(e.target.value)} className='w-full border px-2 py-3 rounded' value={category.name}>
                                    {
                                        categories?.map((item) => (
                                            <option key={item._id} value={item.name}>{item.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='w-full md:max-w-[50%] my-2'>
                                <input className='w-full border px-2 py-3 rounded' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
                            </div>
                            <div className='w-full md:max-w-[50%] my-2'>
                                <textarea className='w-full border px-2 py-3 rounded' name="description" cols="30" rows="10" placeholder='Description' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                            </div>
                            <div className='w-full md:max-w-[50%] my-2'>
                                <input type="number" className='w-full border px-2 py-3 rounded' placeholder='Price' onChange={(e) => setPrice(e.target.value)} value={price} />
                            </div>
                            <div className='w-full md:max-w-[50%] my-2'>
                                <input type="number" name="" className='w-full border px-2 py-3 rounded' placeholder='Quantity' onChange={(e) => setQuantity(e.target.value)} value={quantity} />
                            </div>
                            <div className='w-full md:max-w-[50%] my-2'>
                                <select name="shipping" className='w-full border px-2 py-3 rounded' onChange={(e) => setShipping(e.target.value)} value={shipping ? "Yes" : "No"}>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className='w-full md:max-w-[50%] my-2'>
                                <input type="file" name="photo" className='w-full border px-2 py-3 rounded' accept='image/*' onChange={(e) => setPhoto(e.target.files[0])} />
                            </div>
                            <div className='w-full md:max-w-[50%] my-2'>
                                {photo ? (
                                    <>
                                        <img src={URL.createObjectURL(photo)} alt="my Image" />
                                    </>
                                ) : (
                                    <>
                                        <img src={`/api/v1/product/get-product-photo/${id}`} alt="my Image" />
                                    </>
                                )}
                            </div>
                        </form>
                        <div className='w-full md:max-w-[50%] my-2'>
                            <button className='w-full border px-2 py-3 rounded bg-blue-500 text-white hover:bg-blue-400' onClick={handleUpdate}>Update</button>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default UpdateProduct