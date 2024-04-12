/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/layout/Layout'
import { useCart } from '../context/Cart'
import { useAuth } from '../context/Auth'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const CartPage = () => {
    const [auth, setAuth] = useAuth();
    const [cart, setCart] = useCart();

    return (
        <Layout>
            <div className='w-full p-4 flex flex-col gap-4'>
                <div className='border text-center'>
                    <h2 className='text-xl font-semibold'>{`Hello ${auth?.token && auth?.user?.name}`}</h2>
                    <p>{`You have ${cart.length} items in cart ${auth?.token ? "" : "please login first to checkout."}`}</p>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <div className='border w-[70%]'>
                        {
                            cart?.map((item) => (
                                <div key={item._id} className='w-full gap-2 flex flex-row items-center justify-around'>
                                    <img src={`/api/v1/product/get-product-photo/${item._id}`}
                                        alt="card-image"
                                        className="h-full w-full object-cover my-4"
                                        style={{ maxHeight: '120px', maxWidth: '120px' }} />
                                    <p>Details</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='border'>Payment Gateway</div>
                </div>
            </div>
        </Layout>
    )
}

export default CartPage