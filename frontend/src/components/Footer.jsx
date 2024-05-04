import React, { useEffect, useState } from "react";
import logo from "../Assests/image.png";
import { FaFacebook, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

function Footer() {
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

  return (
    <>
      {/* Mobile Footer */}
      {screenSize === 'mobile' && (
        <footer className="bg-white mt-20">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
            {/* Logo Section */}
            <div className="mb-6 w-full">
              <a href="/" className="flex items-center mb-4">
                <img src={logo} alt="Logo" className="h-7 w-36 mr-6" />
              </a>
              <span className="text-gray-500">
                Generate outside the box think with possibility to target the low.
              </span>
            </div>

            {/* Social Media Section */}
            <div className="flex justify-between w-full mb-4">
              <FaFacebook size={25} />
              <FaGoogle size={25} />
              <FaApple size={25} />
              <FaInstagram size={25} />
            </div>

            {/* Information Section */}
            <div className="grid grid-cols-1 gap-8 sm:gap-6 mb-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Products</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4"><a href="/" className="hover:underline">Features</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Solutions</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Integrations</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Enterprise</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Solutions</a></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4"><a href="/" className="hover:underline">Partners</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Community</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Developers</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">App</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Blog</a></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Why Choose Us?</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4"><a href="/" className="hover:underline">Channels</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Scale</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Watch the Demo</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Our Competition</a></li>
                </ul>
              </div>
            </div>

            {/* Copyright Section */}
            <hr className="my-6 border-gray-200 sm:mx-auto" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      )}



      {/* Tablet Footer */}
      {screenSize === 'tablet' && (
        <footer className="bg-white mt-20">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
            <div className="md:flex md:flex-row md:justify-between">
              <div className="mb-6 md:mb-0 w-60">
                <a href="/" className="flex items-center mb-4">
                  <img src={logo} alt="Logo" className="h-7 w-36 mr-6" />
                </a>
                <span className="text-gray-500">
                  Generate outside the box think with possibility to target the low.
                </span>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:gap-6">
                <div className="justify-self-start">
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Products</h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="mb-4"><a href="/" className="hover:underline">Features</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Solutions</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Integrations</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Enterprise</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Solutions</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Products</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4"><a href="/" className="hover:underline">Features</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Solutions</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Integrations</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Enterprise</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Solutions</a></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4"><a href="/" className="hover:underline">Partners</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Community</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Developers</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">App</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Blog</a></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Why Choose Us?</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4"><a href="/" className="hover:underline">Channels</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Scale</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Watch the Demo</a></li>
                  <li className="mb-4"><a href="/" className="hover:underline">Our Competition</a></li>
                </ul>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <div>
                <span className="text-sm text-gray-500 sm:text-center">
                  © 2023{" "}
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite™
                  </a>
                  . All Rights Reserved.
                </span>
              </div>
              <div className="flex justify-between w-40 mt-2">
                <FaFacebook size={25} />
                <FaGoogle size={25} />
                <FaApple size={25} />
                <FaInstagram size={25} />
              </div>
            </div>

          </div>
        </footer>
      )}

      {/* Laptop/Desktop Footer */}
      {screenSize === 'desktop' && (
        <footer className="bg-white mt-20">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0 w-60">
                <a href="/" className="flex items-center mb-4">
                  <img src={logo} alt="Logo" className="h-7 w-36 mr-6" />
                </a>
                <span className="text-gray-500">
                  Generate outside the box think with possibility to target the low.
                </span>
                <div className="flex justify-between w-40 mt-2">
                  <FaFacebook size={25} />
                  <FaGoogle size={25} />
                  <FaApple size={25} />
                  <FaInstagram size={25} />
                </div>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8 sm:gap-6">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Products</h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="mb-4"><a href="/" className="hover:underline">Features</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Solutions</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Integrations</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Enterprise</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Solutions</a></li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="mb-4"><a href="/" className="hover:underline">Partners</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Community</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Developers</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">App</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Blog</a></li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Why Choose Us?</h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="mb-4"><a href="/" className="hover:underline">Channels</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Scale</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Watch the Demo</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Our Competition</a></li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="mb-4"><a href="/" className="hover:underline">About Us</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">News</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Leadership</a></li>
                    <li className="mb-4"><a href="/" className="hover:underline">Media Kit</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
