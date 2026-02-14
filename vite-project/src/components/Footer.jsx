import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 w-full bg-gradient-to-br from-[#050b1d] via-[#07142f] to-[#020617] 
     border-t border-white/10 text-white py-4 z-50">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base mb-3 md:mb-0 text-gray-300">
       © 2026 PassManeger. All rights reserved.
         <span className="text-amber-300 ml-2">sidhantkamble080@gmail.com</span>
       </p>


        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300 transition-colors">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
