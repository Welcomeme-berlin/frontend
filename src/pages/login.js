import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[710px] h-[780px] flex flex-col border rounded-[20px] bg-white shadow-2xl">
          <div className="w-[300px] h-[29px] font-bold text-2xl relative top-[50px] left-[228px]">
            Login <font color="#d38019">into your </font> account
          </div>
          <div className="relative m-4 top-[50px]">
            <form className="mt-4">
              <div className="mt-8 mb-2 relative left-[100px]">
                <label
                  htmlFor="email"
                  className="block text-xl font-bold text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  className=" block w-[506px] border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none"
                />
              </div>
              <div className=" mt-6 mb-2 relative left-[100px]">
                <label
                  htmlFor="password"
                  className="block text-xl font-bold text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="block w-[506px] border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none"
                />
              </div>
              <div className="w-[151px] h-[20px] m-2 font-medium text-black relative left-[459px]">
                Forgot Password?
              </div>
              <div className="mt-6 flex flex-col items-center justify-center">
                <button
                  className="w-[506px] h-[58px] px-4 py-2 tracking-wide text-[#deb37e] text-xl font-medium bg-[#171611] rounded-md  focus:outline-none 
                relative left-6"
                >
                  Login
                </button>
                <p className="mt-2 text-[16px] font-medium">or</p>
                <div className="mt-4 relative left-6">
                  <div className="w-[506px] h-[58px] bg-white border border-[#d38019] flex items-center justify-center mb-2 rounded-[10px]">
                    <FcGoogle size={40} />
                    <p className="relative left-4">
                      Continue with Google account
                    </p>
                  </div>
                  <div className="w-[506px] h-[58px] bg-white border border-[#d38019] flex items-center justify-center rounded-[10px]">
                    <SiFacebook size={40} color="#1877F2" />
                    <p className="relative left-4">
                      Continue with Facebook account
                    </p>
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
              <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
