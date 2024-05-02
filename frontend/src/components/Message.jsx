
import React, { useState, useEffect } from 'react';


const Message = () => {

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
                            {/* Hype got you here. of it. Stay for best ever help. */}
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
                            {/* Hype got you here. of it. Stay for best ever help. */}
                        </p>
                        <p className="font-inter text-base lg:text-lg font-normal py-3 tracking-tighter text-center text-gray-700">
                            We've been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully.
                        </p>
                    </>
                );
            default:
                return (
                    <>
                        <p className="font-inter text-md font-bold tracking-tighter text-center text-gray-900">
                            User generated content in real-time will have multiple touchpoints for offshoring.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="card" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </>
                );
        }
    };


    
    return (
        <div className="flex items-center justify-center">
            <div className="w-full md:w-3/4 lg:w-1/2 xl:w-2/5 p-4">
                <p className="font-inter text-lg text-blue-500 font-semibold tracking-tighter text-center mb-4">
                    Messaging for all
                </p>
                {renderContent()}     
            </div>
        </div>
    )
}

export default Message
