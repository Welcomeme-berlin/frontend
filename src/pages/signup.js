import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[710px] h-[780px] flex flex-col border rounded-[20px] bg-white shadow-2xl">
          <div className="w-[253px] h-[29px] font-bold text-2xl relative top-[50px] left-[228px]">
            Create <font color="#d38019">new </font> account
          </div>
          <div className="flex flex-col items-center justify-center m-4 relative top-[70px]">
            <form className="mt-4">
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block text-xl font-bold text-black"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="block w-full border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none"
                />
              </div>
              <div className="mt-8 mb-2">
                <label
                  htmlFor="email"
                  className="block text-xl font-bold text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="nationality"
                    className="block text-xl font-bold text-black"
                  >
                    Nationality
                  </label>
                  <input
                    type="text"
                    className="block w-full border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    htmlFor="phone"
                    className="block text-xl font-bold text-black"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    className="block w-full border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none"
                  />
                </div>
              </div>
              <div className=" mt-6 mb-2">
                <label
                  htmlFor="password"
                  className="block text-xl font-bold text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none"
                />
              </div>
              <div className="mt-6 flex flex-col items-center justify-center">
                <button className="w-[262px] h-[58px] px-4 py-2 tracking-wide text-[#deb37e] text-xl font-medium bg-[#171611] rounded-md  focus:outline-none ">
                  Sign up
                </button>
                <p className="mt-2 text-[16px] font-medium">or</p>
                <div className="flex">
                  <div className="w-20 h-20 shadow-xl bg-white flex items-center justify-center mr-2">
                    <FcGoogle size={40} />
                  </div>
                  <div className="w-20 h-20 shadow-xl bg-white flex items-center justify-center">
                    <SiFacebook size={40} color="#1877F2" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center mt-20">
            <p className="text-[16px] text-[#5f5e5b] font-medium">
              Already have an account?
            </p>
            <div
              className="
            ml-2 font-bold text-xl text-[#d38019]"
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
