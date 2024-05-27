/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";


const Sidebar = () => { 
    
    return (
        <>
            <nav
                className="top-100 left-0 w-full h-full border-r bg-white space-y-8">
                <div className="flex flex-col h-full px-4">
                    <div className="overflow-auto">
                        <ul className="text-sm font-medium flex-1">
                            {
                                <li>This is my prompt</li>
                            }
                        </ul>
                    </div >
                </div>
            </nav>
        </>
    );
};

export default Sidebar;