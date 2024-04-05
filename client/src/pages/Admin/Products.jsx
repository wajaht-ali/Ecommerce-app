/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_APP_API;

const Products = () => {
    const [products, setProducts] = useState([]);
    const [images, setImages] = useState([]);
    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${API_KEY}/api/v1/product/get-product`);
            if (res.data.success) {
                setProducts(res.data.product);
            }
            else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(`Error with get products ${error}`)
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <Layout>
            <div className='w-full h-auto flex flex-col md:flex-row justify-around py-4 text-black'>
                <div className='w-auto md:min-w-[200px] md:mr-2 md:border p-2 h-auto'>
                    <AdminMenu />
                </div>
                <div className='border w-full h-auto'>
                    <h2 className='text-xl md:text-3xl px-4 py-4 font-semibold select-none text-start'>All Products</h2>
                    <div className='border py-2'>
                        <div className='border p-2 m-2 flex flex-col md:flex-row'>
                            {products.map((item) => (
                                <Link key={item._id} to={`/admin/dashboard/products/${item.slug}`}>
                                    <div className='border p-2 m-2 w-[200px] h-[200px]' >
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                        <p>{item.quantity}</p>
                                        <img src={`${API_KEY}/api/v1/product/get-product-photo/${item._id}`} alt="product-image" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Products