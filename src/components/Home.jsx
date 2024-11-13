import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png"; 

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#D5F3FE]">
            <h1 className="text-4xl font-bold text-green-600 mb-4">CalcQuest</h1>
            <img src={Logo} alt="logo" className="w-28 h-28 mb-6" />
            
            <Link to="/game">
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg mb-4 hover:bg-green-700">
                    Start
                </button>
            </Link>
            
            <Link to="/about">
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                    About
                </button>
            </Link>
        </div>
    );
};

export default Home;
