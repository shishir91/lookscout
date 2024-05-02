import React, { useState, useEffect } from 'react';
import Message from './Message';

const Body = () => {
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
                    <>
                        <p className="font-inter text-4xl lg:text-5xl font-bold py-2 tracking-tighter text-center text-gray-900">
                            Hype got you here. of it. Stay for best ever help.
                        </p>
                        <p className="font-inter text-base lg:text-lg font-normal py-3 tracking-tighter text-center text-gray-700">
                            We've been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully.
                        </p>
                    </>
                );
            case 'tablet':
                return (
                    <>
                        <p className="font-inter text-4xl lg:text-5xl font-bold py-2 tracking-tighter text-center text-gray-900">
                            Hype got you here. of it. Stay for best ever help.
                        </p>
                        <p className="font-inter text-base lg:text-lg font-normal py-3 tracking-tighter text-center text-gray-700">
                            We've been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully.
                        </p>
                    </>
                );
            default:
                return (
                    <>
                        <p className="font-inter text-4xl lg:text-5xl font-bold py-2 tracking-tighter text-center text-gray-900">
                            Hype got you here. Stay for the support.
                        </p>
                        <p className="font-inter text-base lg:text-lg font-normal py-3 tracking-tighter text-center text-gray-700">
                            We've been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully.
                        </p>
                    </>
                );
        }
    };

    const screenWidth = window.innerWidth;
    let marginTop;

    if (screenWidth <= 786) {
        marginTop = '10px';
    } else if (screenWidth >= 768 && screenWidth < 1024) {
        marginTop = '15px';
    } else {
        marginTop = '80px';
    }

    return (
        <>
            <div className="flex items-center justify-center mt-20 mb-20" style={{ marginTop }}>
                <div className="w-full md:w-3/4 lg:w-1/2 xl:w-2/5 p-4">
                    <p className="font-inter text-lg text-blue-500 font-semibold tracking-tighter text-center mb-4">
                        1% OF THE INDUSTRY
                    </p>
                    {renderContent()}
                </div>
            </div>

            <Message />
        </>
    );
};

export default Body;