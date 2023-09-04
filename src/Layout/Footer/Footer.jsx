import React from 'react';
import {FiMusic } from 'react-icons/fi'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <>

<footer className="bg-white h-fit py-20 border-t-4">
<div className="  h-fit mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col h-fit  mx-auto flex-wrap justify-center">
          <div className="w-full sm:w-auto h-fit mb-4 sm:mb-0">
            <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} Vote Pulse. All rights reserved. </p>
          </div>
          <div className="w-full h-fit sm:w-auto">
            <ul className="flex flex-col gap-5 md:flex-row my-6 items-center md:items-center md:justify-center space-x-4">
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full mt-4">
            {/* <ul className="flex justify-center space-x-4">
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  <FaInstagram />
                </a>
              </li>
            </ul> */}
          </div>
          {/* <div className="w-full mt-4">
            <form className="flex justify-center">
              <input type="email" placeholder="Enter your email" className="bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <button type="submit" className="bg-orange-500 text-white rounded px-4 py-2 ml-2 hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
                Subscribe
              </button>
            </form>
          </div> */}
          <div className="w-full mt-4">
            <p className="text-center text-gray-500">Language: English</p>
          </div>
        </div>
      </div>
</footer>

    </>
  );
}

export default Footer;
