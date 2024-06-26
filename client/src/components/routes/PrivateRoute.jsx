/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Spinner from '../Spinner.jsx';
import { useAuth } from "../../context/Auth.jsx";


export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get(`/api/v1/auth/user-auth`)
            if (res.data.ok) {
                setOk(true)
            }
            else {
                setOk(false)
            }
        }
        // console.log(auth);
        if (auth?.token) authCheck()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth, auth?.token])

    return ok ? <Outlet /> : <Spinner />
}