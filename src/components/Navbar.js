import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/wmlogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full flex justify-between items-center h-20 mx-auto px-4 text-white bg-[#181817]">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-20 h-20" />
        <p className="font-semibold text-xl">Welcome Me</p>
      </div>
      <ul className="hidden md:flex text-xl">
        <li className="p-4">
          {/* <Link to="/">Home</Link> */}
          Home
        </li>
        <li className="p-4">Services</li>
        <li className="p-4">Plan</li>
        <li className="p-4">Contact us</li>
      </ul>
      {/* Mobile hamburger */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500 bg-white z-10"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-2xl font-bold m-4 pt-4">Logo.</h1>
        <ul className="mt-20 uppercase text-center">
          <li className="p-4">Home</li>
          <li className="p-4">About us</li>
          <li className="p-4">Contact us</li>
          <li className="p-4">Login</li>
          <li className="p-4">Sign up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
