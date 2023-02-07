import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [seePassword, setSeePassword] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };
  const handleToggle = () => {
    setSeePassword(!seePassword);
  };
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[350px] md:w-[450px] h-[500px] md:h-[600px] flex flex-col items-center justify-center border rounded-[20px] bg-white shadow-2xl">
          <div className="text-center font-bold text-lg md:text-2xl relative top-4 md:top-10">
            Login <font color="#d38019">into your </font> account
          </div>
          <div className="w-[300px] md:w-[400px] relative top-10 my-2 mx-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm md:text-lg font-medium text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  className="w-full h-10 border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none rounded-lg"
                />
                {errors.email && (
                  <p>
                    You have not entered any emails, or have entered a wrong
                    pattern
                  </p>
                )}
              </div>
              <div className="relative">
                <div className="my-4">
                  <label
                    htmlFor="password"
                    className="text-sm md:text-lg font-medium text-black"
                  >
                    Password
                  </label>
                  <input
                    type={seePassword === false ? "password" : "text"}
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                    })}
                    className="w-full h-10 border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none rounded-lg"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs pt-2">
                      Please check the Password: A valid password should contain
                      one Capital Letter, one Small Letter, and the number of
                      characters should be between 6 to 15
                    </p>
                  )}
                </div>
                <div className="text-2xl text-gray-500 absolute top-10 md:top-12 right-5">
                  {seePassword === false ? (
                    <AiFillEye onClick={handleToggle} />
                  ) : (
                    <AiFillEyeInvisible onClick={handleToggle} />
                  )}
                </div>
              </div>
              <div className="w-[151px] h-[20px] m-2 font-medium text-black relative left-[130px] md:left-[250px] underline">
                <Link to="/forgotPassword">Forgot Password?</Link>
              </div>
              <div className="mt-6 flex flex-col items-center justify-center">
                <button
                  type="submit"
                  className="w-[300px] md:w-[400px] h-[48px] md:h-[58px] px-4 py-2 tracking-wide text-white text-xl font-medium bg-[#D38019] rounded-lg  focus:outline-none 
                "
                >
                  Log in
                </button>
                {/* <p className="m-2 text-base font-medium">Or</p> */}
                {/* <div className="mt-4 relative left-6">
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
                </div> */}
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center mt-20 md:mt-[100px]">
            <p className="text-[16px] text-[#5f5e5b] font-medium">
              Yet to have an account?
            </p>
            <div
              className="
            ml-2 font-medium text-xl text-black"
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
