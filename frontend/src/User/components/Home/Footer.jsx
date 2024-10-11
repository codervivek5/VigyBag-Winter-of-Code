import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import logo from '../../../assets/Vigybag-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0a0b0d] text-white py-8 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo Section */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <img 
            src={logo} 
            alt="VWOC Logo" 
            className="w-20 h-auto"
          />
          <p className="mt-2 text-sm">&copy; vwoc 2024. All Rights Reserved.</p>
        </div>

        {/* Archive Links */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg">Archive</h3>
          <hr className="my-2 border-t border-gray-600" />
          <ul>
            <li><a href="#" className="hover:text-blue-400">VWoC Archive</a></li>
            <li><a href="#" className="hover:text-blue-400">VWoC 2023</a></li>
            <li><a href="#" className="hover:text-blue-400">VWoC 2022</a></li>
            <li><a href="#" className="hover:text-blue-400">VWoC 2021</a></li>
            <li><a href="#" className="hover:text-blue-400">VWoC 2020</a></li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg">Contact us</h3>
          <hr className="my-2 border-t border-gray-600" />
          <form>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-2 my-2 bg-gray-800 text-white rounded-md"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-2 my-2 bg-gray-800 text-white rounded-md"
            />
            <textarea 
              placeholder="Your Message" 
              className="w-full p-2 my-2 bg-gray-800 text-white rounded-md h-24"
            ></textarea>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
              Send
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg">Connect with us</h3>
          <hr className="my-2 border-t border-gray-600" />
          <ul>
            <li className="flex items-center">
              <FaLinkedin className="mr-2" />
              <a href="#" className="hover:text-blue-400">vwoc</a>
            </li>
            <li className="flex items-center">
              <FaGithub className="mr-2" />
              <a href="#" className="hover:text-blue-400">vwoc-jgec</a>
            </li>
            <li className="flex items-center">
              <FaTwitter className="mr-2" />
              <a href="#" className="hover:text-blue-400">TeamVWOC</a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="mailto:contact.vwoc@gmail.com" className="hover:text-blue-400">
                contact.vwoc@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
