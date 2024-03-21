/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Spinner = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevVal) => --prevVal);
        }, 1000)
        if(count === 0) {
            navigate('/login');
        }
        return () => clearInterval(interval);
    }, [count, navigate])
    return (
        <div className='h-screen w-full flex flex-col items-center justify-center'>
            <button type="button" className="bg-indigo-500 p-2 rounded text-white text-center ..." disabled>
                <svg className="animate-spin text-white h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

                </svg>
                Processing...
            </button>
            <h1 className="text-center text-xl font-semibold">Redirecting you to Home in {count}s</h1>
        </div>
    )
}

export default Spinner