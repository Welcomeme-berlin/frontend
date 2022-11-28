import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[500px] h-[400px] flex flex-col border rounded-[20px] bg-white shadow-2xl">
          <div className="text-center font-bold text-2xl relative top-10">
            Forgot Password ?
          </div>
          <div className="w-[400px] relative top-20 my-2 mx-10">
            <form className="flex flex-col items-center justify-center">
              <div>
                <label
                  htmlFor="email"
                  className="text-lg font-medium text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-[400px] h-10 border-b border-[#d38019] text-gray-700 px-4 py-2 mt-2 focus:outline-none rounded-lg"
                />
              </div>

              <div className="mt-6 flex flex-col items-center justify-center">
                <button
                  className="w-[450px] h-[58px] px-4 py-2 tracking-wide text-white text-xl font-medium bg-[#D38019] rounded-lg  focus:outline-none 
                relative left-4"
                >
                  Confirm Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
