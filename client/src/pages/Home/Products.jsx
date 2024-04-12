/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import prices from '../../components/Prices.js';
import SearchInput from '../SearchInput.jsx';
import { useCart } from '../../context/Cart.jsx';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// const API_KEY = import.meta.env.VITE_APP_API;

import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();

  const toggleNav = () => {
    setSidenav(!sidenav);
  }
  const getCategories = async () => {
    try {
      const res = await axios.get(`/api/v1/category/get-category`);
      if (res.data.success) {
        setCategory(res.data.category);
      }
      else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(`Error with get categories ${error}`);
    }
  }
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    }
    else {
      all = all.filter((item) => item !== id)
    }
    setChecked(all);
  }
  const filterProducts = async () => {
    try {
      const res = await axios.post(`/api/v1/product/product-filters`, { radio, checked })
      if (res.data.success) {
        setProducts(res.data.products)
      }
    } catch (error) {
      console.log(`Error with filtering products ${error}`);
    }
  }
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
  const handleDelete = async (id) => {
    try {
      let qus = window.prompt("Are you sure to delete this product?");
      if (qus === 'No' || qus === 'no') return;
      const res = await axios.delete(`/api/v1/product/delete-product/${id}`);
      if (res.data.success) {
        alert("Product deleted sucessfully!");
        fetchProducts();
      }
      else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(`Error with delete product!`);
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
    if (!radio.length || !checked.length) fetchProducts();
  }, [radio.length, checked.length])

  useEffect(() => {
    filterProducts();
    // eslint-disable-next-line
  }, [radio, checked])

  useEffect(() => {
    getCategories();
  }, [])
  return (
    <Layout>
      <div className='w-full h-auto flex flex-col md:flex-row justify-around py-4 text-black'>
        <div className='w-auto md:min-w-[200px] md:mr-2 md:border p-2 h-auto'>
          {/* <Sidebar /> */}
          <div className=''>
            <div onClick={toggleNav} className='block md:hidden'>
              {!sidenav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile nav */}
            <div className={!sidenav ? "hidden" : "nav_items sticky top-100 left-1  block md:hidden bg-blue-200 py-4 px-2 rounded-lg h-auto box-border z-40"}>
              <div>
                <h2 className='text-2xl text-center font-semibold mb-4'>Filter Products</h2>
                <h3 className='text-lg font-semibold'>Category</h3>

                <div className='flex flex-col justify-around'>
                  {category.map((item) => (
                    <label className='hover:bg-gray-50 border-b-2 rounded-sm p-2 w-full select-none' htmlFor={item._id} key={item.name}>
                      <input className='mx-2' value={item.array} id={item._id} type="checkbox" name={item._id} onChange={(e) => handleFilter(e.target.checked, item._id)} />
                      {item.name}
                    </label>
                  ))}
                </div>
                <div className='mt-4'>
                  <h3 className='text-lg font-semibold'>Prices</h3>
                  <div className='flex flex-col justify-around'>
                    {prices.map((item) => (
                      <label className='hover:bg-gray-50 border-b-2 rounded-sm p-2 w-full select-none' htmlFor={item._sid} key={item._sid}>
                        <input className='mx-2' value={item.array} id={item._sid} type="radio" name='PriceTag' onChange={(e) => setRadio(e.target.value)} />
                        {item.name}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <button className='bg-green-600 px-3 py-2 mt-2 rounded text-white' onClick={() => window.location.reload()}>Rest</button>
            </div>


            {/* Block Nav */}
            <div className='hidden md:block'>
              <h2 className='text-2xl text-center font-semibold mb-4'>Filter Products</h2>
              <div>
                <h3 className='text-lg font-semibold'>Category</h3>
                <div className='flex flex-col justify-around'>
                  {category.map((item) => (
                    <label key={item._id} className='hover:bg-gray-50 border-b-2 rounded-sm p-2 w-full select-none' htmlFor={item.name}>
                      <input className='mx-2' value={item.array} id={item.name} type="checkbox" onChange={(e) => handleFilter(e.target.checked, item._id)} />
                      {item.name}
                    </label>
                  ))}
                </div>
              </div>

              <div className='mt-4'>
                <h3 className='text-lg font-semibold'>Prices</h3>
                <div className='flex flex-col justify-around'>
                  {prices.map((item) => (
                    <label className='hover:bg-gray-50 border-b-2 rounded-sm p-2 w-full select-none' htmlFor={item.name} key={item._id}>
                      <input className='mx-2' value={item.array} id={item.name} name="price" type="radio" onChange={(e) => setRadio(e.target.value)} />
                      {item.name}
                    </label>
                  ))}
                </div>
              </div>
              <button className='bg-blue-600 px-3 py-2 mt-2 rounded text-white' onClick={() => window.location.reload()}>Rest</button>
            </div>
          </div>
        </div>
        <div className='border w-full h-auto mx-auto flex flex-col items-center'>
          {/* {JSON.stringify(radio, null, 4)} */}
          <h2 className='text-xl md:text-3xl px-4 py-4 font-semibold select-none text-start'>All Products</h2>
          <SearchInput />
          <div className='py-2'>
            <div className=' flex flex-col md:flex-row items-center justify-around gap-5 flex-wrap'>

              {products.map((item) => (
                <Link key={item._id} to={`/product/${item.slug}`}>
                  <Card className="w-80 mx-2">
                    <CardHeader shadow={false} floated={false} className="h-64 overflow-hidden">
                      <img
                        src={`/api/v1/product/get-product-photo/${item._id}`}
                        alt="card-image"
                        className="h-full w-full object-cover"
                        style={{ minHeight: '100%', minWidth: '100%' }}
                      />
                    </CardHeader>
                    <CardBody className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                          {item.name}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                          ${item.price}
                        </Typography>
                      </div>
                      {/* Uncomment this section if you want to display additional description */}
                      <Typography variant="small" color="gray" className="font-normal opacity-75">
                        {item.description.substring(0, 50)}
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
                          onClick={() => handleAddToCart(item)}
                          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none hover:bg-blue-600 hover:text-white focus:scale-105 focus:shadow-none active:scale-100">Add to Cart</Button>
                      </Link>
                    </CardFooter>
                  </Card>
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