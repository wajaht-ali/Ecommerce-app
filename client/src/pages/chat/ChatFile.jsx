/* eslint-disable no-unused-vars */
import "../../index.css";
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { LuSendHorizonal } from "react-icons/lu";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Sidebar from "../../components/Sidebar.jsx";
import Markdown from 'react-markdown';

const ChatFile = () => {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [isSideBar, setIsSideBar] = useState(false);
    const { id } = useParams();

    const fetchPrompt = async (id) => {
        try {
            const res = await axios.get(`/api/v1/ask/c/${id}`);
            if (res.data.success) {
                setResult(res.data.prompt.prompt);
            }
            else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(`Error with the prompt fetching ${error}`);
        }
    }
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
    useEffect(() => {
        fetchPrompt(id);
    }, [id])

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
                        <h1 className="font-bold text-lg">Google Gemini Chatbot</h1>
                    </div>
                    <p className="text-lg my-4 p-4 text-start">
                        <Markdown>{result}</Markdown>
                    </p>
                    <div className="w-full flex flex-col items-center justify-center border border-2-black">
                        <form className='p-3 flex flex-row items-center' onSubmit={handleSubmit}>
                            <input type="text" className="border w-full rounded-xl gap-4 mr-4 p-4 border-gray-500" onChange={(e) => setPrompt(e.target.value)} placeholder='Enter text' value={prompt} />
                            <button className="bg-indigo-500 text-white hover:bg-indigo-300 p-3 rounded-md" onClick={handleSubmit}><LuSendHorizonal /></button>
                        </form>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default ChatFile