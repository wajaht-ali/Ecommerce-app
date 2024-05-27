/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/Auth.jsx";

const Sidebar = () => {
    const [auth, setAuth] = useAuth();
    const [result, setResult] = useState([]);
    const id = auth?.user?._id;
    const fetchPrompts = async (id) => {
        try {
            if (!id) {
                console.log("No id available");
                return;
            }
            else {
                const res = await axios.get(`/api/v1/ask/fetch-prompts/${id}`);
                if (res.data.success) {
                    setResult(res.data.prompts);
                    alert("All prompts fetched!");
                }
                else {
                    alert(res.data.message);
                }
            }
        } catch (error) {
            console.log(`Error with prompts fetching ${error}`);
        }
    }
    useEffect(() => {
        fetchPrompts(id);
    }, [id])

    return (
        <>
            <nav
                className=" p-2 pt-10 w-full h-full border-r bg-white space-y-8">
                <div className="flex flex-col h-full px-4">
                    <div className="overflow-auto">
                        {
                                result.map(item => (
                                    <div key={item._id}>{item.title}</div>
                                ))
                        }
                    </div >
                </div>
            </nav>
        </>
    );
};

export default Sidebar;