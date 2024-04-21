/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout.jsx';
import SearchInput from './SearchInput.jsx';
import { Link } from 'react-router-dom';
import img from '../assets/OIP.jpeg';
import img1 from "../assets/kids_coll.jpeg";
import img2 from "../assets/mens_coll.jpg";
import img3 from "../assets/women_coll.jpeg";
import axios from 'axios';
import { useCart } from '../context/Cart.jsx';
import {
  Card,
  CardFooter,
  Button,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Home = () => {
  const [products, setProducts] = useState([]);
 const [cart, setCart] = useCart();
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`/api/v1/product/get-product`);
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
    <Layout className="border-2 border-black">
      <div className='w-full h-auto flex flex-col items-center py-4 text-black'>
        <div ><SearchInput /></div>
        <section className="py-28">
          <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
            <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
              <h1 className="text-sm text-indigo-600 font-medium">
                Over 200 successful deals
              </h1>
              <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                Find your favourite brands, on your single tap.
              </h2>
              <p>
                E-shopping is a online shopping stroe, serving you the best quality products at your door step.
              </p>
              <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <Link to="/products" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                  View Category
                </Link>
                <Link to="/products" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                  Products
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
              <img
                src={img}
                className=" md:rounded-tl-[108px]"
                alt=""
              />
            </div>
          </div>
          <div className="mt-14 px-4 md:px-8">
            <p className="text-center text-xl md:text-2xl text-black font-bold">Featured Categories</p>
            <div className="flex justify-center md:justify-around items-center flex-wrap gap-x-12 gap-y-6 mt-6">
              <Link to="/products">
                <div >
                  <img className='w-[150px] h-[150px] object-contain rounded-md' src={img1} alt="Image" />
                  <h2 className="font-semibold text-lg">Kids Collection</h2>
                </div></Link>
              <Link to="/products">
                <div >
                  <img className='w-[150px] h-[150px] object-contain rounded-md' src={img2} alt="Image" />
                  <h2 className="font-semibold text-lg">Men Collection</h2>
                </div></Link>
              <Link to="/products">
                <div >
                  <img className='w-[150px] h-[150px] object-contain rounded-md' src={img3} alt="Image" />
                  <h2 className="font-semibold text-lg">Women Collection</h2>
                </div></Link>
            </div>
            <button className='my-8 w-full mx-auto'>
              <Link to="/products" className='text-white bg-blue-600 hover:bg-blue-500 rounded-md text-lg py-2 px-3'>View More</Link>
            </button>
          </div>
          <div className="mt-14 px-4 md:px-8">
            <p className="text-center text-xl md:text-2xl text-black font-bold">Featured Products</p>
            <div className="flex justify-center md:justify-around items-center flex-wrap gap-x-12 gap-y-6 mt-6">
              {products.slice(0, 4).map((item) => (
                <Link key={item._id} to={`/admin/dashboard/products/${item.slug}`}>
                  <Card className="w-80 mx-2">
                    <CardHeader shadow={false} floated={false} className="h-96">
                      <img src={`/api/v1/product/get-product-photo/${item._id}`}
                        alt="card-image"
                        className="h-full w-full object-cover" />
                    </CardHeader>
                    <CardBody>
                      <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                          {item.name}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                          ${item.price}
                        </Typography>
                      </div>
                      <Typography variant="small"
                        color="gray"
                        className="font-normal opacity-75" >
                        With plenty of talk and listen time, voice-activated Siri access, and
                        an available wireless charging case.
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 flex flex-row gap-2">
                      <Link to={`/product/${item.slug}`}>
                        <Button
                          ripple={false}
                          fullWidth={true}
                          // onClick={() => navigate(`/product/${item.slug}`)}
                          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none hover:bg-green-500 hover:text-white focus:scale-105 focus:shadow-none active:scale-100">More Details</Button>
                      </Link>
                      <Link >
                        <Button
                          onClick={() => {
                            setCart([...cart, item]),
                              localStorage.setItem('cart', JSON.stringify([...cart, item]))
                          }}
                          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none hover:bg-blue-600 hover:text-white focus:scale-105 focus:shadow-none active:scale-100">Add to Cart</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
            <button className='my-8 w-full mx-auto'>
              <Link to="/products" className='text-white bg-blue-600 hover:bg-blue-500 rounded-md text-lg py-2 px-3'>View More</Link>
            </button>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home