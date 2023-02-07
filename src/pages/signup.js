import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Signup = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
  const handleToggle = () => {
    setSeePassword(!seePassword);
  };
  const handleToggle1 = () => {
    setSeeConfirmPassword(!seeConfirmPassword);
  };
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[350px] md:w-[500px] flex flex-col items-center justify-center border rounded-[20px] bg-white shadow-2xl">
          <div className="w-[253px] h-[29px] font-bold text-lg md:text-2xl relative top-10 text-center">
            Create <font color="#d38019">new </font> account
          </div>
          <div className="my-2 md:my-4">
            <form className="flex flex-col items-center justify-center m-4 relative top-10 w-[300px] md:w-[400px]">
              <div className="w-full mb-4">
                <label
                  htmlFor="name"
                  className=" text-sm md:text-lg font-medium text-black"
                >
                  Name
                </label>
                <input
                  type="text"
                  className=" w-full border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none rounded-lg"
                />
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="email"
                  className=" text-sm md:text-lg font-medium text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  className=" w-full border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none rounded-lg"
                />
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="phone"
                  className=" text-sm md:text-lg font-medium text-black"
                >
                  Phone Number
                </label>
                <input
                  type="phone"
                  className=" w-full border border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none rounded-lg"
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="dateOfBirth"
                    className=" text-sm md:text-lg font-medium text-black"
                  >
                    Date of birth
                  </label>
                  <input
                    type="text"
                    className=" w-full border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    htmlFor="nationality"
                    className="text-sm md:text-lg font-medium text-black"
                  >
                    Nationality
                  </label>
                  <input
                    type="text"
                    className=" w-full border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full relative">
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="text-sm md:text-lg font-medium text-black"
                  >
                    Password
                  </label>
                  <input
                    type={seePassword === false ? "password" : "text"}
                    className="w-full border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none rounded-lg"
                  />
                </div>
                <div className="text-2xl text-gray-500 absolute top-10 md:top-12 right-5">
                  {seePassword === false ? (
                    <AiFillEye onClick={handleToggle} />
                  ) : (
                    <AiFillEyeInvisible onClick={handleToggle} />
                  )}
                </div>
              </div>
              <div className="w-full relative">
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="text-sm md:text-lg font-medium text-black"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={seeConfirmPassword === false ? "password" : "text"}
                    className="w-full border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none rounded-lg"
                  />
                </div>
                <div className="text-2xl text-gray-500 absolute top-10 md:top-12 right-5">
                  {seeConfirmPassword === false ? (
                    <AiFillEye onClick={handleToggle1} />
                  ) : (
                    <AiFillEyeInvisible onClick={handleToggle1} />
                  )}
                </div>
              </div>
              <div className="mt-8 flex flex-col items-center justify-center">
                <button className="w-[250px] md:w-[400px] h-[40px] md:h-[50px] px-4 py-2 tracking-wide text-white text-lg md:text-xl font-medium bg-[#D38019] rounded-md  focus:outline-none ">
                  Sign up
                </button>
                {/* <p className="mt-2 text-[16px] font-medium">or</p>
                <div className="flex">
                  <div className="w-20 h-20 shadow-xl bg-white flex items-center justify-center mr-2">
                    <FcGoogle size={40} />
                  </div>
                  <div className="w-20 h-20 shadow-xl bg-white flex items-center justify-center">
                    <SiFacebook size={40} color="#1877F2" />
                  </div>
                </div> */}
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center my-10">
            <p className="text-sm md:text-base text-[#5f5e5b] font-medium">
              Already have an account?
            </p>
            <div
              className="
            ml-2 font-bold text-lg md:text-xl text-[#d38019]"
            >
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
