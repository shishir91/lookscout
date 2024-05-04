import React from "react";
import logo from "../Assests/image.png";
import { FaFacebook, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

function Footer() {
  const footerElements = [
    {
      title: "Products",
      body: [
        "Features",
        "Solutions",
        "Integrations",
        "Enterprise",
        "Solutions",
      ],
    },
    {
      title: "Resources",
      body: ["Partners", "Community", "Developers", "App", "Blog"],
    },
    {
      title: "Why Choose Us?",
      body: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
    },
    {
      title: "Company",
      body: ["About Us", "News", "Leadership", "Media Kit"],
    },
  ];
  return (
    <footer className="bg-white mt-20 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 w-60">
            <a href="/" className="flex items-center mb-4">
              <img src={logo} alt="Logo" className="h-7 w-36 mr-6" />
            </a>
            <span className=" text-gray-500">
              Generate outside the box think with possibility to target the low.
            </span>
            <div className="flex justify-between w-40 mt-2">
              <FaFacebook size={25} />
              <FaGoogle size={25} />
              <FaApple size={25} />
              <FaInstagram size={25} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {footerElements.map((element, index) => {
              return (
                <div key={index}>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                    {element.title}
                  </h2>
                  <ul className="text-gray-500  font-medium">
                    {element.body.map((body, index) => {
                      return (
                        <li className="mb-4" key={index}>
                          <a href="/" className="hover:underline">
                            {body}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
