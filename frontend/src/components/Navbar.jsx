import React, { useState, useEffect } from 'react';
import logo from '../Assests/image.png';
import { FaHome } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    // State to store the current screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    // State and function to toggle visibility of submenu
    // State to toggle visibility of submenu
    const [showMenu, setShowMenu] = useState(false);

    // Function to toggle visibility of submenu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Function to update screenWidth state when window is resized
    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []); // Empty dependency array ensures that this effect runs only once after initial render

    // Function to return appropriate navbar based on screen size
    const getNavbar = () => {
        if (screenWidth >= 1024) {
            // Top navbar for large screens
            return (
                <nav className="flex items-center justify-between p-8 border-b-2 h-20">
                    <div className="flex items-center pl-40">
                        <img src={logo} alt="Logo" className="h-7 w-36 mr-6" /> {/* Render logo as an image */}
                        <ul className="flex space-x-6 pl-10">
                            <li className="w-43 h-22 font-semibold font-inter text-base leading-22">Home</li>
                            <li className="w-43 h-22 font-semibold font-inter text-base leading-22">Our Products</li>
                            <li className="w-43 h-22 font-semibold font-inter text-base leading-22">
                                {/* Dropdown for Resources */}
                                <select className="w-43 h-22 font-semibold font-inter text-base leading-22">
                                    <option value="" disabled defaultValue hidden>Resources</option> {/* Use defaultValue instead of selected */}
                                    <option value="resource1">Resource </option>
                                    <option value="resource2">Resource </option>
                                    <option value="resource3">Resource </option>
                                </select>
                            </li>
                            <li className="w-43 h-22 font-semibold font-inter text-base leading-22">Contacts</li>
                        </ul>
                    </div>
                    <div className="flex items-center pr-20">
                        {/* Sign Up and Login Links */}
                        <button className="font-inter text-base font-semibold leading-22 text-blue-600 px-4">Sign Up</button>
                        <button className="font-inter text-base font-semibold leading-22 bg-blue-600 text-white px-3 py-2 rounded-md">Log In</button>
                    </div>
                </nav>
            );
        } else if (screenWidth >= 768 && screenWidth < 1024) {
            // Tablet navbar with submenu
            return (
                <nav className="flex items-center justify-between p-8 border-b-2 h-16">
                    <img src={logo} alt="Logo" className="h-6 w-28 mr-6" />
                    <div className="relative">
                        {/* Toggle button */}
                        <button className="font-inter text-2xl font-semibold leading-22 text-black px-4" onClick={toggleMenu}><IoMenu /></button>
                        {/* Cross button */}
                        {/* Navbar content */}
                        {showMenu && (
                            <div className="fixed inset-0 flex justify-end bg-gray-900 bg-opacity-50 z-50">
                                <div className="bg-white w-72 p-2 rounded-l-md ">
                                    <ul className="flex flex-col space-y-2 pl-2">
                                        <div className='flex justify-between items-center mt-2 mb-3'>
                                            <img src={logo} alt="Logo" className="h-4 w-18 mr-6 " />
                                            <button className="font-inter text-base font-semibold leading-22 text-black bg-gray-200 px-3 py-1 mr-8 rounded-lg" onClick={toggleMenu}>✕</button>
                                        </div>
                                        <li className="font-semibold font-inter text-base flex items-center hover:bg-gray-200 rounded-md transition duration-300 p-1">
                                            <FaHome className="mr-2" /> {/* Assuming you're using React Icons */}
                                            Home
                                        </li>
                                        <li className="font-semibold font-inter text-base flex items-center hover:bg-gray-200 rounded-md transition duration-300 p-1">
                                            <MdProductionQuantityLimits className="mr-2" />
                                            Our Products
                                        </li>
                                        <li className="font-semibold font-inter text-base flex items-center hover:bg-gray-200 rounded-md transition duration-300 p-1">
                                            <GrResources className="mr-2" />
                                            Resources
                                        </li>
                                        <ul className='pl-6'>
                                            <li value="resource1" className="font-semibold font-inter text-base leading-22">Resource 1</li>
                                            <li value="resource2" className="font-semibold font-inter text-base leading-22">Resource 2</li>
                                            <li value="resource3" className="font-semibold font-inter text-base leading-22">Resource 3</li>
                                        </ul>
                                        <li className="font-semibold font-inter text-base flex items-center hover:bg-gray-200 rounded-md transition duration-300 p-1">
                                            <MdOutlinePermContactCalendar className="mr-2" />
                                            Contacts
                                        </li>
                                    </ul>

                                    {/* Sign Up and Login Links */}
                                    <div className="mt-4">
                                        <button className="font-inter text-base font-semibold leading-22 text-blue-600 px-4">Sign Up</button>
                                        <button className="font-inter text-base font-semibold leading-22 bg-blue-600 text-white px-3 py-2 rounded-md">Log In</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            );
        } else {
            // Mobile navbar
            return (
                <nav className="flex items-center justify-between p-8 border-b-2 h-16">
                    <img src={logo} alt="Logo" className="h-6 w-28 mr-6" />
                    <div className="relative">
                        {/* Toggle button */}
                        <button className="font-inter text-2xl font-semibold leading-22 text-black px-4" onClick={toggleMenu}><IoMenu /></button>
                        {/* Cross button */}
                        {/* Navbar content */}
                        {showMenu && (
                            <div className="fixed inset-0 flex justify-end bg-gray-900 bg-opacity-50 z-50">
                                <div className="bg-white w-72 p-2 rounded-l-md ">
                                    <ul className="flex flex-col space-y-2 pl-2">
                                        <div className='flex justify-between items-center mt-2 mb-3'>
                                            <img src={logo} alt="Logo" className="h-4 w-18 mr-6 " />
                                            <button className="font-inter text-base font-semibold leading-22 text-black bg-gray-200 px-3 py-1 mr-8 rounded-lg" onClick={toggleMenu}>✕</button>
                                        </div>
                                        <li className="font-semibold font-inter text-base flex items-center hover:bg-gray-200 rounded-md transition duration-300 p-1">
                                            <FaHome className="mr-2" /> {/* Assuming you're using React Icons */}
                                            Home
                                        </li>
                                        <li className="font-semibold font-inter text-base flex items-center hover:bg-gray-200 rounded-md transition duration-300 p-1">
                                            <MdProductionQuantityLimits className="mr-2" />
                                            Our Products
                                        </li>
                                        <li className="font-semibold font-inter text-base flex items-center hover:bg-gray-200 rounded-md transition duration-300 p-1">
                                            <GrResources className="mr-2" />
                                            Resources
                                        </li>
                                        <ul className='pl-6'>
                                            <li value="resource1" className="font-semibold font-inter text-base leading-22">Resource 1</li>
                                            <li value="resource2" className="font-semibold font-inter text-base leading-22">Resource 2</li>
                                            <li value="resource3" className="font-semibold font-inter text-base leading-22">Resource 3</li>
                                        </ul>
                                        <li className="font-semibold font-inter text-base flex items-center hover:bg-gray-200 rounded-md transition duration-300 p-1">
                                            <MdOutlinePermContactCalendar className="mr-2" />
                                            Contacts
                                        </li>
                                    </ul>

                                    {/* Sign Up and Login Links */}
                                    <div className="mt-4">
                                        <button className="font-inter text-base font-semibold leading-22 text-blue-600 px-4">Sign Up</button>
                                        <button className="font-inter text-base font-semibold leading-22 bg-blue-600 text-white px-3 py-2 rounded-md">Log In</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            );
        }
    };

    return (
        <>
            {getNavbar()}
        </>
    );
};

export default Navbar;






