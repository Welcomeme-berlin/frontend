import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { BsJournalCheck, BsQuestionCircle } from "react-icons/bs";
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
        <p className="font-semibold text-xl">
          Welcome<font color="#DEB37E">Me</font>
        </p>
      </div>
      <ul className="hidden md:flex text-xl">
        <li className="p-3">
          {/* <Link to="/">Home</Link> */}
          Home
        </li>
        <li className="p-3">Services</li>
        <li className="p-3">Plan</li>
        <li className="p-3">Contact us</li>
      </ul>
      {/* Mobile hamburger */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 right-[-100%] top-20 w-[164px] h-[250px] ease-in-out duration-500 bg-white z-10 rounded-2xl"
            : "fixed left-[-100%]"
        }
      >
        <ul className="mt-4 text-center text-black text-base">
          <li className="p-3 flex items-center">
            <span>
              <BiHomeAlt size={30} className="mr-2" />
            </span>
            Home
          </li>
          <li className="p-3 flex items-center">
            <span>
              <AiOutlineUnorderedList size={30} className="mr-2" />
            </span>
            Services
          </li>

          <li className="p-3 flex items-center">
            <span>
              <BsJournalCheck size={30} className="mr-2" />
            </span>
            Plans
          </li>
          <li className="p-3 flex items-center">
            <span>
              <BsQuestionCircle size={30} className="mr-2" />
            </span>
            Contact us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
