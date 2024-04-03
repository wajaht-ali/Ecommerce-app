/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/Auth';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Spinner from '../Spinner';

const API_KEY = import.meta.env.VITE_APP_API;

export default function AdminRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get(`${API_KEY}/api/v1/auth/admin-auth`, {
                headers: {
                    'Authorization': auth?.token
                }
            })
            if (res.data.ok) {
                setOk(true)
            }
            else {
                setOk(false)
            }
        }
        if (auth?.token) authCheck()
    }, [auth?.token])

    return ok ? <Outlet /> : <Spinner path="" />
}