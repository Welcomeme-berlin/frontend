import React, { useState } from "react";
import Notification from "../assets/icons/notification.png";
import room from "../assets/room.png";
import { MdLocationPin } from "react-icons/md";
import ApartmentDetails from "../components/ApartmentDetails";
import { APARTMENT_DATA } from "../constants";

const RentApartment = () => {
  const [id, setId] = useState("");

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">
            <span className="text-[#D38019] mr-1 ">RENT</span>
            <span className="text-[#171611]">APARTMENT</span>
          </h1>
          <p className="text-[#171611] opacity-60 text-base font-medium">
            Welcome, John
          </p>
        </div>
        <div>
          <input
            className="w-[355px] h-[45px] bg-[#fbfaf9] p-4 rounded-lg border-slate-200"
            type="text"
            placeholder="Search in Dashboard"
          />
        </div>
        <div>
          <img
            className="w-[48px] h-[48px]"
            src={Notification}
            alt="notification-icon"
          />
        </div>
      </div>

      {/* Search and Filter Field Section */}
      <div className="mt-[45px] mb-[20px] flex">
        <div className="mr-1">
          <input
            className="w-[200px] h-[48px] p-4 border border-[#D38019] rounded"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="mx-[5px]">
          {/* <input className='w-[200px] h-[48px] p-4 border border-[#D38019] rounded' type="text" placeholder='Search' /> */}

          <select
            className="w-[140px] h-[48px] p-2 border border-[#D38019] rounded"
            name="location"
          >
            <option value="germany">Location</option>
            <option value="germany">Germany</option>
            <option value="nigeria">Nigeria</option>
            <option value="italy">Italy</option>
            <option value="spain">Spain</option>
          </select>
        </div>
        <div className="mx-[5px]">
          <select
            className="w-[140px] h-[48px] p-2 border border-[#D38019] rounded"
            name="budget"
          >
            <option value="val1">Budget</option>
            <option value="val2">50k - 100k</option>
            <option value="val3">1M+</option>
          </select>
        </div>
        <div className="mx-[5px] mr-2">
          <select
            className="w-[140px] h-[48px] p-2 border border-[#D38019] rounded"
            name="type"
          >
            <option value="val1">Type</option>
            <option value="val2">Duplex</option>
            <option value="val3">Self-con</option>
          </select>
        </div>
        <div>
          <select
            className="w-[140px] h-[48px] p-2 border border-[#D38019] rounded"
            name="type"
          >
            <option value="val1">Duration</option>
            <option value="val2">2years</option>
            <option value="val3">5 years</option>
          </select>
        </div>
      </div>

      {/* {id ? <ApartmentDetails /> : null} */}

      {/* Apartment Cards Loop*/}
      <div className="flex flex-wrap">
        {APARTMENT_DATA.map((apartment) => (
          <div
            key={apartment.id}
            onClick={() => setId(apartment.id)}
            className="my-5 mr-7"
          >
            <img className="w-[170px]" src={apartment.image} alt="room" />
            <div className="flex justify-center items-center bg-[#D9D9D9] w-[170px] h-[38.15px]">
              <MdLocationPin color="#D38019" />
              <p className="font-medium text-[8px] text-[#171611]">
                {" "}
                {apartment.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RentApartment;
