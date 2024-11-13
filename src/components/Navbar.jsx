import React from "react";
import { Link } from "react-router-dom"; 
import Logo from "../assets/images/logo.png";

const Navbar = () => {
    const links = [
        { id: 1, name: "home", path: "/" },       
        { id: 2, name: "game", path: "/game" },
        { id: 3, name: "about", path: "/about" },
    ];

    return (
        <nav className="flex justify-between items-center w-full h-20 px-4 bg-[#3B873E] fixed">
            <div>
                <img src={Logo} alt="Logo" className="w-28 cursor-pointer hover:scale-105 duration-200" />
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex justify-center items-center w-full">
                {links.map(({ id, name, path }) => ( 
                    <li key={id} className="px-4 capitalize cursor-pointer font-medium text-white transition duration-200 ease-in-out hover:bg-white hover:text-[#3B873E] hover:border hover:border-white rounded-full">
                        <Link to={path}>  
                            {name} 
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar; 