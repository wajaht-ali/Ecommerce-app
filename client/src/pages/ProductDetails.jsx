/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/Cart';

const ProductDetails = () => {
    const [cart, setCart] = useCart();
    const { slug } = useParams();
    const [product, setProduct] = useState([]);

    const getProducts = async () => {
        try {
            const res = await axios.get(`/api/v1/product/get-product-details/${slug}`);
            // console.log(product);
            if (res?.data?.success) {
                setProduct(res.data.product);
            }
            else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(`Error with get product details ${error}`);
        }
    }
    const handleAddToCart = (item) => {
        // Update cart state using the function form of setCart
        setCart(prevCart => {
            const newCart = [...prevCart, item];
            localStorage.setItem('cart', JSON.stringify(newCart)); // Update local storage
            return newCart; // Return the new cart state
        });

        alert("Added to cart!");
    };
    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <div className='w-full h-auto flex flex-col items-center py-4 text-black'>
                <div className='my-2'>
                    <h2 className='text-2xl text-center font-semibold'>Product Details</h2>
                </div>
                {/* {JSON.stringify(product, null, 4)} */}

                <div className='w-full border rounded p-2 flex flex-col md:flex-row justify-around gap-4'>
                    <div className=''>
                        <img
                            src={`/api/v1/product/get-product-photo/${product._id}`}
                            alt="card-image"
                            className="h-full w-full object-cover"
                            style={{ minHeight: '100%', minWidth: '100%' }} />
                    </div>
                    <div className='w-full flex flex-col items-start gap-2 text-lg font-semibold'>
                        <h1 className='text-xl font-bold font-poppins'>Name: {product.name}</h1>
                        <h2 className='text-base font-normal'>Category: {product?.category?.name}</h2>
                        <p>Descrpition: {product.description}</p>
                        <h2>Price: ${product.price}</h2>
                        {/* <p>{product?.shipping}</p> */}
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none hover:bg-blue-600 hover:text-white focus:scale-105 focus:shadow-none active:scale-100 p-2 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetails