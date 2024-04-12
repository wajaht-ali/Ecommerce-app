/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/layout/Layout'
import { useSearch } from '../context/Search'
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const Search = () => {
    const [values, setValues] = useSearch();
    return (
        <Layout>
            <div className='w-full h-auto flex flex-col items-center py-4 text-black'>
                <div>
                    <h1 className='text-2xl font-semibold'>Search Results</h1>
                    <h2 className='text-lg'>{values?.results.length < 1 ? "No Result found" : `${values?.results.length} Items found`}</h2>
                </div>
                <div>
                    <div className='py-2'>
                        <div className=' flex flex-col md:flex-row items-center justify-around gap-5 flex-wrap'>

                            {values?.results.map((item) => (
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
                                                    ripple={false}
                                                    fullWidth={true}
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
        </Layout>
    )
}

export default Search