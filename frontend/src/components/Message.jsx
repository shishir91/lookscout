
import React, { useState, useEffect } from 'react';
import icon1 from '../Assests/image copy.png';
import icon2 from '../Assests/image copy 2.png';
import icon3 from '../Assests/image copy 3.png';
import icon4 from '../Assests/image copy 4.png';
import icon5 from '../Assests/image copy 5.png';
import icon6 from '../Assests/image copy 6.png';
import { BsArrowRight } from 'react-icons/bs';

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
                    <div className='px-16'>
                    <div className="grid grid-cols-1 items-center">

                        <div className="card border-none" style={{ width: "26rem" }}>
                            <div className="card-body">
                                <img src={icon1} alt="" className='h-12 w-12 ' />
                                <h6 className=" font-inter text-lg font-semibold  tracking-tighter text-left">Easier Work Organization</h6>
                                <p className="font-inter text-base font-normal  tracking-tighter text-left">Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.</p>
                            </div>
                        </div>
                        <div className="card border-none" style={{ width: "26rem" }}>
                            <div className="card-body">
                                <img src={icon2} alt="" className='p-2  h-12 w-12 text-left' />
                                <h6 className="font-inter text-lg p-2 font-semibold  tracking-tighter text-left">Fast Connection</h6>
                                <p className="font-inter text-base p-2 font-normal  tracking-tighter text-left">Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.</p>
                                <a href="#" className="font-inter text-base text-blue-500 px-2 font-medium inline-flex items-center mt-2">
                                    Learn More
                                    <BsArrowRight className="ml-1" />
                                </a>
                            </div>
                        </div>
                        <div className="card border-none" style={{ width: "26rem" }}>
                            <div className="card-body">
                                <img src={icon3} alt="" className='h-12 w-12 p-2' />
                                <h6 className="font-inter text-lg font-semibold p-2 tracking-tighter text-left">Streamlined Processes</h6>
                                <p className="font-inter text-base font-normal p-2 tracking-tighter text-left">Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.</p>

                            </div>
                        </div>
                        <div className="card border-none" style={{ width: "26rem" }}>
                            <div className="card-body">
                                <img src={icon4} alt="" className='h-12 w-12 p-2' />
                                <h6 className="font-inter text-lg font-semibold p-2 tracking-tighter text-left">Easier Integrations</h6>
                                <p className="font-inter text-base font-normal p-2 tracking-tighter text-left">Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.</p>
                                <a href="#" className="font-inter text-base text-blue-500 px-2 font-medium inline-flex items-center mt-2">
                                    Learn More
                                    <BsArrowRight className="ml-1" />
                                </a>
                            </div>
                        </div>
                        <div className="card border-none" style={{ width: "26rem" }}>
                            <div className="card-body">
                                <img src={icon5} alt="" className='h-12 w-12 p-2' />
                                <h6 className="font-inter text-lg font-semibold p-2 tracking-tighter text-left">Marketing Analytics</h6>
                                <p className="font-inter text-base font-normal p-2 tracking-tighter text-left">Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.</p>

                            </div>
                        </div>
                        <div className="card border-none" style={{ width: "26rem" }}>
                            <div className="card-body">
                                <img src={icon6} alt="" className='h-12 w-12 p-2' />
                                <h6 className="font-inter text-lg font-semibold p-2 tracking-tighter text-left">Workflow Builder</h6>
                                <p className="font-inter text-base font-normal p-2 tracking-tighter text-left">Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.</p>
                                <a href="#" className="font-inter text-base text-blue-500 px-2 font-medium inline-flex items-center mt-2">
                                    Learn More
                                    <BsArrowRight className="ml-1" />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
                );
            case 'tablet':
                return (
                    <div className='px-16'>
                        <div className="grid grid-cols-2">

                            <div className="card border-none" style={{ width: "26rem" }}>
                                <div className="card-body">
                                    <img src={icon1} alt="" className='h-12 w-12 p-2' />
                                    <h6 className=" font-inter text-lg p-2 font-semibold  tracking-tighter text-left">Easier Work Organization</h6>
                                    <p className="font-inter text-base p-2 font-normal  tracking-tighter text-left">Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.</p>
                                </div>
                            </div>
                            <div className="card border-none" style={{ width: "26rem" }}>
                                <div className="card-body">
                                    <img src={icon2} alt="" className='p-2  h-12 w-12 text-left' />
                                    <h6 className="font-inter text-lg p-2 font-semibold  tracking-tighter text-left">Fast Connection</h6>
                                    <p className="font-inter text-base p-2 font-normal  tracking-tighter text-left">Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.</p>
                                    <a href="#" className="font-inter text-base text-blue-500 px-2 font-medium inline-flex items-center mt-2">
                                        Learn More
                                        <BsArrowRight className="ml-1" />
                                    </a>
                                </div>
                            </div>
                            <div className="card border-none" style={{ width: "26rem" }}>
                                <div className="card-body">
                                    <img src={icon3} alt="" className='h-12 w-12 p-2' />
                                    <h6 className="font-inter text-lg font-semibold p-2 tracking-tighter text-left">Streamlined Processes</h6>
                                    <p className="font-inter text-base font-normal p-2 tracking-tighter text-left">Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.</p>

                                </div>
                            </div>
                            <div className="card border-none" style={{ width: "26rem" }}>
                                <div className="card-body">
                                    <img src={icon4} alt="" className='h-12 w-12 p-2' />
                                    <h6 className="font-inter text-lg font-semibold p-2 tracking-tighter text-left">Easier Integrations</h6>
                                    <p className="font-inter text-base font-normal p-2 tracking-tighter text-left">Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.</p>
                                    <a href="#" className="font-inter text-base text-blue-500 px-2 font-medium inline-flex items-center mt-2">
                                        Learn More
                                        <BsArrowRight className="ml-1" />
                                    </a>
                                </div>
                            </div>
                            <div className="card border-none" style={{ width: "26rem" }}>
                                <div className="card-body">
                                    <img src={icon5} alt="" className='h-12 w-12 p-2' />
                                    <h6 className="font-inter text-lg font-semibold p-2 tracking-tighter text-left">Marketing Analytics</h6>
                                    <p className="font-inter text-base font-normal p-2 tracking-tighter text-left">Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.</p>

                                </div>
                            </div>
                            <div className="card border-none" style={{ width: "26rem" }}>
                                <div className="card-body">
                                    <img src={icon6} alt="" className='h-12 w-12 p-2' />
                                    <h6 className="font-inter text-lg font-semibold p-2 tracking-tighter text-left">Workflow Builder</h6>
                                    <p className="font-inter text-base font-normal p-2 tracking-tighter text-left">Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.</p>
                                    <a href="#" className="font-inter text-base text-blue-500 px-2 font-medium inline-flex items-center mt-2">
                                        Learn More
                                        <BsArrowRight className="ml-1" />
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                );
            default:
                return (
                    <div className='px-16'>
                        <p className="font-inter text-base font-normal leading-24 tracking-tighter text-center pb-8">
                            User generated content in real-time will have multiple touchpoints for offshoring.
                        </p>
                        <div className="grid grid-cols-3">

                            <div className="card border-none" style={{ width: "26rem" }}>
                                <div className="card-body">
                                    <img src={icon1} alt="" className='h-12 w-12 p-2' />
                                    <h6 className=" font-inter text-lg p-2 font-semibold  tracking-tighter text-left">Easier Work Organization</h6>
                                    <p className="font-inter text-base p-2 font-normal  tracking-tighter text-left">Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.</p>
                                </div>
                            </div>
                            <div className="card border-none" style={{ width: "26rem" }}>
                                <div className="card-body">
                                    <img src={icon2} alt="" className='p-2  h-12 w-12 text-left' />
                                    <h6 className="font-inter text-lg p-2 font-semibold  tracking-tighter text-left">Fast Connection</h6>
                                    <p className="font-inter text-base p-2 font-normal  tracking-tighter text-left">Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.</p>

                                </div>
                            </div>
                            <div className="card border-none" style={{ width: "26rem" }}>
                                <div className="card-body">
                                    <img src={icon3} alt="" className='h-12 w-12 p-2' />
                                    <h6 className="font-inter text-lg font-semibold p-2 tracking-tighter text-left">Streamlined Processes</h6>
                                    <p className="font-inter text-base font-normal p-2 tracking-tighter text-left">Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.</p>

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
                <div className="w-full md:w-3/4 lg:w-1/2 xl:w-2/5 p-4">
                    <p className="lg:text-lg md:text-3xl sm:text-2xl  font-bold leading-40 tracking-tighter text-center">
                        Messaging for all
                    </p>
                </div>
            </div>
            {renderContent()}
        </>
    )
}

export default Message
