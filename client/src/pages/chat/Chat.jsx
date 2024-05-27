/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { LuSendHorizonal } from "react-icons/lu";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import Layout from '../../components/layout/Layout'
import axios from 'axios';
import Sidebar from "../../components/Sidebar.jsx";
import "../../index.css";

const Chat = () => {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [isSideBar, setIsSideBar] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post("api/v1/ask/", { prompt });
            if (res.data.success) {
                setResult(res.data.text);
                setPrompt("");
            }
            else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(`Error with prompt sending ${error}`);
        }
    }
    const handleSidebar = () => {
        setIsSideBar(!isSideBar);
    }

    return (
        <Layout>
            <div className="w-full flex flex-row items-start p-4">
                <div className={`sidebar md:block ${isSideBar ? 'active' : ''}`}>
                    <Sidebar />
                </div>
                <div onClick={handleSidebar} className="md:hidden absolute">
                    {isSideBar ? <IoMdClose size={25} /> : <HiMiniBars3BottomLeft size={25} />}
                </div>
                <div className="border border-black w-full">
                    <div className="w-full text-black text-center font-bold text-lg p-3 font-poppins">
                        <h1>Google Gemini Chatbot</h1>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center border border-2-black">
                        <form className='max-w-[500px] p-3 flex flex-row items-center' onSubmit={handleSubmit}>
                            <input type="text" className="border rounded-md gap-4 mr-4 p-2 border-gray-300" onChange={(e) => setPrompt(e.target.value)} placeholder='Enter text' value={prompt}/>
                            <button className="bg-indigo-500 text-white hover:bg-indigo-300 p-3 rounded-md" onClick={handleSubmit}><LuSendHorizonal /></button>
                        </form>
                        <p className="text-lg">{result}</p>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Chat