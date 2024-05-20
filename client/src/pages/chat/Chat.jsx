/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { LuSendHorizonal } from "react-icons/lu";
import Layout from '../../components/layout/Layout'
import axios from 'axios';

const Chat = () => {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post("api/v1/ask/", {prompt});
            if(res.data.success) {
                setResult(res.data.text);
            }
            else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(`Error with prompt sending ${error}`);
        }
    }
    return (
        <Layout>
            <div className="w-full flex flex-col items-center justify-center p-4">
                <div className="w-full text-black text-center font-bold text-lg p-3 font-poppins">
                    <h1>Google Gemini Chatbot</h1>
                </div>
                <div className="w-full flex flex-col items-center justify-center border border-2-black">
                    <form className='max-w-[500px] p-3 flex flex-row items-center' onSubmit={handleSubmit}>
                        <input type="text" className="border rounded-md gap-4 mr-4 p-2 border-gray-300" onChange={(e) => setPrompt(e.target.value)} placeholder='Enter text'/>
                        <button className="bg-indigo-500 text-white hover:bg-indigo-300 p-3 rounded-md" onClick={handleSubmit}><LuSendHorizonal /></button>
                    </form>
                    <p className="text-lg">{result}</p>
                </div>
            </div>
        </Layout>
    )
}

export default Chat