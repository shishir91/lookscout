import React, { useState, useEffect } from 'react'
import icon7 from '../Assests/image copy 7.png';
import guy1 from '../Assests/image copy 8.png';
import guy2 from '../Assests/image copy 9.png';
import guy3 from '../Assests/image copy 10.png';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaSlack, FaGoogle, FaPaypal, FaPinterest, FaMailchimp } from 'react-icons/fa';

const Info = () => {

    const [screenSize, setScreenSize] = useState('desktop');

    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleQuestionToggle = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: 'Authentication Issues',
            details: 'Register now and take advantage of our amazing offers.',
        },
        {
            question: 'Mi est qaam hendrerit ut torem, sodales aliquam mauris neque.',
            details: 'Updated last week',
        },
        {
            question: 'Cras velit, solerisque tortor augue.',
            details: 'Updated today',
        },
        {
            question: 'Venenatis malesuada turpis et integer felis rhoncus dictum eget et.',
            details: 'Updated 2 days ago',
        },
        {
            question: 'Pretium vehicles donec non mollis senectus lectus laueo tellus.',
            details: 'Updated 3 days ago',
        },
        {
            question: 'Elit massa amet semam ultrices vitae placerat augue.',
            details: 'Updated 4 days ago',
        },
    ];

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
                    <div className='px-16'>

                    </div>
                );
            case 'tablet':
                return (
                    <div className='px-16'>

                    </div>
                );
            default:
                return (
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="md:w-1/2 p-6">
                            <h2 className="text-2xl font-bold mb-4">Demonstrate branding</h2>
                            <h2 className="text-2xl font-bold mb-4">consequently think outside</h2>
                            <p className="mb-4">
                                Velit purus egestas tellus pharetra. Mattis eget sed faucibus magna
                                vitae nisi pellentesque a diam tincidunt. Aliquet malesuada tellus
                                tellus faucibus mauris quisque mauris in.
                            </p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Enterprise-grade security</li>
                                <li>99.9% guaranteed uptime SLA</li>
                                <li>Designated customer success team</li>
                            </ul>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Start now
                            </button>
                        </div>

                        <div className=" p-6">
                            <div className="relative" style={{ width: "560px", height: "560px" }}>
                                <img
                                    src={icon7}
                                    alt="Workspace"
                                    className="mb-4"
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
                                />
                                <div className="absolute bottom-0 left-0 w-full flex justify-center items-center">
                                    <div className="bg-white rounded-lg shadow-md p-6 mb-5" style={{ width: "30rem", height: "10rem" }}>
                                        <div className="flex flex-col items-center">
                                            <h3 className="text-xl font-bold mb-4">Check Us Out</h3>
                                            <h1>Test</h1>
                                            <h1>Test</h1>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Get Started Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                );
        }
    };

    return (
        <>
            <div className="flex items-center justify-center">

            </div>
            {renderContent()}

            {/* The Core Team Member */}
            <div className="bg-white  py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                        The Core of Our Team
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-16">
                        Organically grow the holistic world view of disruptive innovation via
                        world-class synergy and great work that truly rocks.
                    </p>
                    <div className="flex justify-center">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                            <div className="text-center">
                                <img
                                    src={guy1}
                                    alt="Morgan Drew"
                                    className="mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Morgan Drew
                                </h3>
                                <p className="text-gray-600 mb-2">Title/Position</p>
                                <div className="flex justify-center space-x-4">
                                    <a href="#" className="text-gray-500 hover:text-gray-700">
                                        <FaTwitter size={20} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700">
                                        <FaFacebook size={20} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700">
                                        <FaInstagram size={20} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700">
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center">
                                <img
                                    src={guy2}
                                    alt="Jeffery Walker"
                                    className="mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Jeffery Walker
                                </h3>
                                <p className="text-gray-600 mb-2">Title/Position</p>
                                <div className="flex justify-center space-x-4">
                                    <a href="#" className="text-gray-500 hover:text-gray-700">
                                        <FaTwitter size={20} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700">
                                        <FaFacebook size={20} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700">
                                        <FaInstagram size={20} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700">
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center">
                                <img
                                    src={guy3}
                                    alt="Andrew Steve"
                                    className="mx-auto  mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Andrew Steve
                                </h3>
                                <p className="text-gray-600 mb-2">Title/Position</p>
                                <div className="flex justify-center space-x-4">
                                    <a href="#" className="text-gray-500 hover:text-gray-700">
                                        <FaTwitter size={20} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700">
                                        <FaFacebook size={20} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700">
                                        <FaInstagram size={20} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700">
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}

            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                        Frequently asked questions
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-16">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </p>
                    <div className="bg-white rounded-lg shadow-md">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 last:border-b-0 py-4 px-6 cursor-pointer"
                                onClick={() => handleQuestionToggle(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">{faq.question}</h3>
                                    {activeQuestion === index ? (
                                        <FaChevronUp size={20} className="text-gray-500" />
                                    ) : (
                                        <FaChevronDown size={20} className="text-gray-500" />
                                    )}
                                </div>
                                {activeQuestion === index && (
                                    <p className="mt-4 text-sm sm:text-base text-gray-600">{faq.details}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Signup Login */}

            <div className="bg-blue-500 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white text-center mb-8">
                        1% OF THE INDUSTRY
                    </h2>
                    <p className="text-xl font-semibold text-white text-center mb-12">
                        Welcome to your new digital reality that which will rock your world truly at all.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
                        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-md mb-4 sm:mb-0 sm:mr-4 md:mr-0 md:mb-8">
                            Sign up
                        </button>
                        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-md">
                            Log in
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="flex items-center mb-4 md:mb-0 mr-4 md:mr-8">
                            <FaSlack size={40} className="text-white" />
                        </div>
                        <div className="flex items-center mb-4 md:mb-0 mr-4 md:mr-8">
                            <FaGoogle size={40} className="text-white" />
                        </div>
                        <div className="flex items-center mb-4 md:mb-0 mr-4 md:mr-8">
                            <FaPaypal size={40} className="text-white" />
                        </div>
                        <div className="flex items-center mb-4 md:mb-8 md:order-first">
                            <FaPinterest size={40} className="text-white" />
                        </div>
                        <div className="flex items-center mb-4 md:mb-8 md:order-2">
                            <FaMailchimp size={40} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Info
