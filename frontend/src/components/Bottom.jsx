import React, { useState, useEffect } from 'react'

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { FaSlack, FaGoogle, FaPaypal, FaPinterest, FaMailchimp } from 'react-icons/fa';
import { FaSlack, FaGoogle, FaPaypal, FaPinterest, FaMailchimp } from 'react-icons/fa';
import { SiTwilio } from "react-icons/si";


const Bottom = () => {
    const [screenSize, setScreenSize] = useState('desktop');


    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setScreenSize('mobile');
            } else if (screenWidth >= 768 && screenWidth < 1024) {
                setScreenSize('tablet');
            } else {
                setScreenSize('desktop');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial screen size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderContent = () => {
        switch (screenSize) {
            case 'mobile':
                return (
                    <div div className="bg-blue-500 py-16" >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-sm font-semibold text-white text-center mb-8">
                                1% OF THE INDUSTRY
                            </h2>
                            <p className="text-4xl font-semibold text-white text-center mb-12">
                                Welcome to your new digital reality that <br />which will rock your world truly at all.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
                                <button style={{
                                    width: "90%",
                                    height: "90%",
                                    padding: "12px 18px",
                                    gap: "6px",
                                    borderRadius: "6px",
                                    fontSize: "15px",
                                    fontWeight: "600",
                                    lineHeight: "22px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center", // Add this line to center horizontally
                                    marginBottom: "0.5rem"
                                }} className="bg-white text-blue-600 text-center">
                                    Sign up
                                </button>

                                <button style={{
                                    width: "90%",
                                    height: "90%",
                                    padding: "12px 18px",
                                    gap: "6px",
                                    borderRadius: "6px",
                                    fontSize: "15px",
                                    fontWeight: "600",
                                    lineHeight: "22px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center", // Add this line to center horizontally
                                    marginBottom: "0.5rem"
                                }} className="bg-white text-blue-600 text-center">
                                    Log In
                                </button>

                            </div>
                            <div className="grid grid-cols-1 gap-4 justify-center">
                                <div className="flex items-center justify-center bg-blue-500 p-4 rounded-lg">
                                    <SiTwilio size={32} className="text-white mr-2" />
                                    <span className="text-white">Twilio</span>
                                </div>
                                <div className="flex items-center justify-center bg-blue-500 p-4 rounded-lg">
                                    <FaSlack size={32} className="text-white mr-2" />
                                    <span className="text-white">Slack</span>
                                </div>
                                <div className="flex items-center justify-center bg-blue-500 p-4 rounded-lg">
                                    <FaGoogle size={32} className="text-white mr-2" />
                                    <span className="text-white">Google</span>
                                </div>
                                <div className="flex items-center justify-center bg-blue-500 p-4 rounded-lg">
                                    <FaPaypal size={32} className="text-white mr-2" />
                                    <span className="text-white">PayPal</span>
                                </div>
                                <div className="flex items-center justify-center bg-blue-500 p-4 rounded-lg ">
                                    <FaPinterest size={32} className="text-white mr-2" />
                                    <span className="text-white">Pinterest</span>
                                </div>
                                <div className="flex items-center justify-center bg-blue-500 p-4 rounded-lg">
                                    <FaMailchimp size={32} className="text-white mr-2" />
                                    <span className="text-white">Mailchimp</span>
                                </div>
                            </div>
                        </div>
                    </div >
                );
            case 'tablet':
                return (
                    <div div className="bg-blue-500 py-16" >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-sm font-semibold text-white text-center mb-8">
                                1% OF THE INDUSTRY
                            </h2>
                            <p className="text-4xl font-semibold text-white text-center mb-12">
                                Welcome to your new digital reality that <br />which will rock your world truly at all.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
                                <button style={{
                                    width: "91px",
                                    height: "46px",
                                    padding: "12px 18px",
                                    gap: "6px",
                                    borderRadius: "6px",
                                    fontSize: "15px",
                                    fontWeight: "600",
                                    lineHeight: "22px",
                                    display: "flex",
                                    alignItems: "center",
                                    marginRight: "1rem"

                                }} className="bg-white text-blue-600">
                                    Sign up
                                </button>
                                <button style={{
                                    width: "80px",
                                    height: "46px",
                                    padding: "12px 18px",
                                    gap: "6px",
                                    borderRadius: "6px",
                                    fontSize: "15px",
                                    fontWeight: "600",
                                    lineHeight: "22px",
                                    display: "flex",
                                    alignItems: "center"

                                }} className="bg-blue-400 text-white">
                                    Log in
                                </button>
                            </div>
                            <div className="grid grid-cols-4 gap-4 justify-center">
                                <div className="flex items-center bg-blue-500 p-4 rounded-lg">
                                    <SiTwilio size={32} className="text-white mr-2" />
                                    <span className="text-white">Twilio</span>
                                </div>
                                <div className="flex items-center bg-blue-500 p-4 rounded-lg">
                                    <FaSlack size={32} className="text-white mr-2" />
                                    <span className="text-white">Slack</span>
                                </div>
                                <div className="flex items-center bg-blue-500 p-4 rounded-lg">
                                    <FaGoogle size={32} className="text-white mr-2" />
                                    <span className="text-white">Google</span>
                                </div>
                                <div className="flex items-center bg-blue-500 p-4 rounded-lg">
                                    <FaPaypal size={32} className="text-white mr-2" />
                                    <span className="text-white">PayPal</span>
                                </div>
                            </div>

                            <div className='grid grid-cols-4 justify-center'>
                                <div className="flex items-center bg-blue-500 p-4 rounded-lg ">
                                    {/* <FaPinterest size={32} className="text-white mr-2" /> */}
                                    <span className="text-white"></span>
                                </div>
                                <div className="flex items-center bg-blue-500 p-4 rounded-lg ">
                                    <FaPinterest size={32} className="text-white mr-2" />
                                    <span className="text-white">Pinterest</span>
                                </div>
                                <div className="flex items-center bg-blue-500 p-4 rounded-lg">
                                    <FaMailchimp size={32} className="text-white mr-2" />
                                    <span className="text-white">Mailchimp</span>
                                </div>
                            </div>



                        </div>
                    </div >
                );
            default:
                return (

                    <div div className="bg-blue-500 py-16" >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-sm font-semibold text-white text-center mb-8">
                                1% OF THE INDUSTRY
                            </h2>
                            <p className="text-4xl font-semibold text-white text-center mb-12">
                                Welcome to your new digital reality that <br />which will rock your world truly at all.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
                                <button style={{
                                    width: "91px",
                                    height: "46px",
                                    padding: "12px 18px",
                                    gap: "6px",
                                    borderRadius: "6px",
                                    fontSize: "15px",
                                    fontWeight: "600",
                                    lineHeight: "22px",
                                    display: "flex",
                                    alignItems: "center",
                                    marginRight: "1rem"

                                }} className="bg-white text-blue-600">
                                    Sign up
                                </button>
                                <button style={{
                                    width: "80px",
                                    height: "46px",
                                    padding: "12px 18px",
                                    gap: "6px",
                                    borderRadius: "6px",
                                    fontSize: "15px",
                                    fontWeight: "600",
                                    lineHeight: "22px",
                                    display: "flex",
                                    alignItems: "center"

                                }} className="bg-blue-400 text-white">
                                    Log in
                                </button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
                                <div className="flex items-center bg-blue-500 p-4 rounded-lg">
                                    <SiTwilio size={32} className="text-white mr-2" />
                                    <span className="text-white">Twilio</span>
                                </div>
                                <div className="flex items-center bg-blue-500 p-4 rounded-lg">
                                    <FaSlack size={32} className="text-white mr-2" />
                                    <span className="text-white">Slack</span>
                                </div>
                                <div className="flex items-center bg-blue-500 p-4 rounded-lg">
                                    <FaGoogle size={32} className="text-white mr-2" />
                                    <span className="text-white">Google</span>
                                </div>
                                <div className="flex items-center bg-blue-500 p-4 rounded-lg">
                                    <FaPaypal size={32} className="text-white mr-2" />
                                    <span className="text-white">PayPal</span>
                                </div>
                                <div className="hidden md:flex items-center bg-blue-500 p-4 rounded-lg ">
                                    <FaPinterest size={32} className="text-white mr-2" />
                                    <span className="text-white">Pinterest</span>
                                </div>
                                <div className="hidden md:flex items-center bg-blue-500 p-4 rounded-lg">
                                    <FaMailchimp size={32} className="text-white mr-2" />
                                    <span className="text-white">Mailchimp</span>
                                </div>
                            </div>



                        </div>
                    </div >

                );
        }
    };
    return (
        <div>
            {renderContent()}

        </div>
    )
}

export default Bottom



