import React from "react";

import { Link } from "react-router-dom";


const about =()=>{
  alert("this peg not implimented")
}

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-[#050b1d] via-[#07142f] to-[#020617] 
     border-b border-white/10
         flex justify-around px-5 items-center gap-4 h-14">
      <div className="logo font-bold text-white text-2xl">
        <span className="text-emerald-700">&lt;</span>
        Pass
        <span className="text-emerald-700">OP/&gt;</span>
      </div>

      <ul>
        <li className="flex gap-5 text-white">
          <Link to="/" className="hover:font-bold cursor-pointer">
            Home
          </Link>
          <Link  to="/about" className="hover:font-bold cursor-pointer">
            About
          </Link>
          <Link onClick={about} to="/" className="hover:font-bold cursor-pointer">
            Contact
          </Link>
        </li>
      </ul>

      
    </nav>
  );
};

export default Navbar;
