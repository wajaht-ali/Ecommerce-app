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
    const removeItem = (pid) => {
        try {
            let cartItems = [...cart];
            let index = cartItems.findIndex((item) => item._id === pid);
            cartItems.splice(index, 1);
            setCart(cartItems);
            localStorage.setItem('cart', JSON.stringify(cartItems))
        } catch (error) {
            console.log(error);
        }
    }
    const totalPrice = () => {
        let total = 0;
        try {
            cart?.map(item => {
                total = total + item.price
            })
            return total;
        } catch (error) {
            console.log(`error with price ${error}`);
        }
    }
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
                                    <div className='my-4 w-[50%]'>
                                        <img src={`/api/v1/product/get-product-photo/${item._id}`}
                                            alt="card-image"
                                            className="h-full w-full object-cover"
                                            style={{ maxHeight: '120px', maxWidth: '120px' }} />
                                    </div>
                                    <div className='w-[50%]'>
                                        <p className='my-2'>{item.name}</p>
                                        <p className='my-2'>{item.description.slice(0, 30)}</p>
                                        <p className='my-2'>Price: ${item.price}</p>
                                        <Button onClick={() => removeItem(item._id)}
                                            className="bg-red-600 text-white shadow-none hover:scale-105 hover:shadow-none hover:bg-blue-600 hover:text-white focus:scale-105 focus:shadow-none active:scale-100">Remove</Button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='border flex flex-col p-2 items-center gap-4'>
                        <h4 className='text-xl font-semibold'>Shopping Details</h4>
                        <hr />
                        <p>Total: ${totalPrice()}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CartPage