import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div>
          <div className="w-[223px] h-[38px] font-bold text-3xl">Dashboard</div>
          <div className="w-[126px] h-[19px] text-base font-medium text-[#171611]">
            Welcome, Jane
          </div>
        </div>
        <div className="flex">
          <div className="w-[395px] h-[61px] bg-[#fbfaf9] shadow-xl p-4">
            <input placeholder="search" />
          </div>
          <div>notification</div>
        </div>
      </div>
      <div className="flex items-center justify-between my-4 p-4">
        <div className="w-[527px] h-[288px] bg-[#fbfaf9] shadow-xl shadow-[#171611]/20 mr-2">
          overview
        </div>
        <div className="w-[380px] h-[288px] bg-[#fbfaf9] shadow-xl shadow-[#171611]/20">
          appointment
        </div>
      </div>
      <div className="flex items-center justify-between my-4 p-4">
        <div className="w-[527px] h-[288px] bg-[#fbfaf9] shadow-xl shadow-[#171611]/20 mr-2">
          map
        </div>
        <div className="w-[380px] h-[288px] bg-[#fbfaf9] shadow-xl shadow-[#171611]/20">
          report
        </div>
      </div>
    </>
  );
};

export default Dashboard;
