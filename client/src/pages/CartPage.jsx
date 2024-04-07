/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/layout/Layout'
import { useCart } from '../context/Cart'
import { useAuth } from '../context/Auth'

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
                <div className='flex flex-row items-center justify-around gap-4'>
                    <div>Cart Items</div>
                    <div>Payment Gateway</div>
                </div>
            </div>
        </Layout>
    )
}

export default CartPage