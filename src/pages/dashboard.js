import React from "react";
import Notification from "../assets/icons/notification.png";
import { GrOverview } from "react-icons/gr";

const Dashboard = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-3xl uppercase">dashboard</h1>
          <p className="text-base font-medium text-[#171611]">Welcome, Jane</p>
        </div>
        <div className="flex">
          <div className="bg-[#fbfaf9] shadow-2xl mr-10">
            <input
              placeholder="Search in Dashboard"
              className="w-[395px] h-[61px] p-2"
            />
          </div>
          <img src={Notification} />
        </div>
      </div>
      <div className="flex items-center justify-center my-4 p-4">
        <div className="w-[527px] h-[288px] bg-[#fbfaf9] shadow-xl shadow-[#171611]/20 mr-4">
          <div className="flex items-center justify-between m-4 p-2 uppercase text-base">
            <h3>overview</h3>
            <GrOverview />
          </div>
          <div className="w-[219px] h-[60px] font-semibold text-xl float-right mx-6 p-2">
            <h1 className="flex flex-col">
              <span>Your rent is due in</span>
              <span className="text-right text-[#EB0707]">00 days</span>
            </h1>
            <div className=" border border-[#DEB37E] m-2"></div>
          </div>
        </div>
        <div className="w-[380px] h-[288px] bg-[#fbfaf9] shadow-xl shadow-[#171611]/20">
          appointment
        </div>
      </div>
      <div className="flex items-center justify-center my-4 p-4">
        <div className="w-[527px] h-[288px] bg-[#fbfaf9] shadow-xl shadow-[#171611]/20 mr-4">
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
