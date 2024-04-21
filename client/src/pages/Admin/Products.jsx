/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


const Products = () => {
    const [products, setProducts] = useState([]);

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
                    <div className='py-2'>
                        <div className=' flex flex-col md:flex-row items-center justify-around gap-5 flex-wrap'>
                            {products.map((item) => (
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
                                        <CardFooter className="pt-0 flex flex-col gap-2">
                                            <Link to={`/dashboard/admin/update-product/${item.slug}`}>
                                                <Button ripple={false}
                                                    fullWidth={true}
                                                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none hover:bg-green-500 hover:text-white focus:scale-105 focus:shadow-none active:scale-100">
                                                    Update Product
                                                </Button></Link>
                                            <Link onClick={() => handleDelete(item._id)}>
                                                <Button ripple={false}
                                                    fullWidth={true}
                                                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none  hover:bg-red-600 hover:text-white focus:scale-105 focus:shadow-none active:scale-100">
                                                    Delete Product
                                                </Button></Link>
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