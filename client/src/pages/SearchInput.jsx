/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'
import { useSearch } from '../context/Search'
import { useNavigate } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API;

const SearchInput = () => {
    const navigate = useNavigate();

    const [values, setValues] = useSearch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`${API_KEY}/api/v1/product/search/${values.keyword}`);
            setValues({ ...values, results: res.data });
            navigate("/search");
        } catch (error) {
            console.log(`Error with search input ${error}`);
        }
    }
    return (
        <div className='flex flex-row items-center gap-4'>
            <form onSubmit={handleSubmit}>
                <input className='border p-2 rounded md:w-[400px]' type="search" placeholder='Search' value={values.keyword} onChange={(e) => setValues({ ...values, keyword: e.target.value })} required/>
            </form>
            <button className='bg-blue-600 px-3 py-2 rounded text-white'  type='submit' onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default SearchInput