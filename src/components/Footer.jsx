import React from "react";
import Logo from "../assets/wmlogo.png";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <div className="w-[1230px] border border-[#d38019]"></div>
      </div>
      <div className="flex items-center justify-between mx-10 mt-10">
        <div className="w-[100px] h-[100px]">
          <img src={Logo} alt="logo" />
        </div>
        <div className="text-white text-2xl flex items-center justify-center">
          <div className="w-[50px] h-[50px] bg-[#4E483A] m-4 flex items-center justify-center">
            <CgFacebook />
          </div>
          <div className="w-[50px] h-[50px] bg-[#4E483A] m-4 flex items-center justify-center">
            <BsTwitter />
          </div>
          <div className="w-[50px] h-[50px] bg-[#4E483A] m-4 flex items-center justify-center">
            <BsInstagram />
          </div>
          <div className="w-[50px] h-[50px] bg-[#4E483A] m-4 flex items-center justify-center">
            <BsLinkedin />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[627px] border border-[#171611] mt-20"></div>
      </div>
      <div className="flex flex-col items-center justify-center mt-4 mb-20">
        <p className="text-2xl flex items-center">
          All Rights Reserved <AiOutlineCopyrightCircle />
        </p>
        <p className="font-bold text-2xl">
          WelcomeMe {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
};

export default Footer;
