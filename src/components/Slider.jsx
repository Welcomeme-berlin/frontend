import { Swiper, SwiperSlide } from "swiper/react";
import House from "../assets/househunt.png";
import Doctors from "../assets/doctors.png";
import Wallet from "../assets/e-wallet.png";
import People from "../assets/tutorial.png";
import Robot from "../assets/robot.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Button from "./Button";

export default function SliderComponent() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="w-full flex items-center justify-around bg-img bg-cover bg-center">
            <div className="m-4">
              <p className="text-6xl font-semibold ">
                House hunting
                <br /> made <font color="#d38019"> easy </font> for you!
              </p>
              <p className="mt-6 text-2xl text-[#555351]">
                We ease your stress of hunting for houses even
                <br /> before you get into Germany.
              </p>
              <Button
                text="Login"
                style="w-[265px] h-[70px] bg-[#FAE7CF] border rounded-[15px] text-[#995D14] text-center text-xl py-4 relative top-20 hover:bg-white hover:text-[#343331] hover:font-semibold"
              />
              <Button
                text="Sign Up"
                style="w-[265px] h-[70px] bg-[#D38019] border rounded-[15px] text-white text-center text-xl py-4 relative top-20 hover:bg-white hover:text-[#343331] hover:font-semibold"
              />
            </div>
            <div className="w-[552px] h-[552px] mt-4">
              <img src={House} alt="house" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <p className="text-6xl font-semibold ">
                Health insurance
                <br /> <font color="#d38019"> secured </font> for you!
              </p>
              <p className="mt-6 text-2xl text-[#555351]">
                Our health insurance package covers and attains
                <br /> the requirement for Visa application and others in <br />{" "}
                an easy catch just for you
              </p>
              <button className="mt-14 bg-[#343331] text-white text-2xl w-[291px] h-20 border rounded-[15px]">
                Get Started
              </button>
            </div>
            <div className="w-[364px] h-[552px] mt-4">
              <img src={Doctors} alt="house" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <p className="text-6xl font-semibold ">
                German
                <font color="#d38019">
                  {" "}
                  blocked <br /> account{" "}
                </font>{" "}
                provided
              </p>
              <p className="mt-6 text-2xl text-[#555351]">
                Open and get your blocked account settled at a
                <br /> faster pace through German bureacracy in just <br /> one
                click
              </p>
              <button className="mt-14 bg-[#343331] text-white text-2xl w-[291px] h-20 border rounded-[15px]">
                Get Started
              </button>
            </div>
            <div className="w-[433px] h-[433px] mt-4">
              <img src={Wallet} alt="house" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <p className="text-6xl font-semibold ">
                Free German
                <br />
                <font color="#d38019"> language </font> tutorials!
              </p>
              <p className="mt-6 text-2xl text-[#555351]">
                Open and get your blocked account settled at a
                <br /> faster pace through German bureacracy in just <br /> one
                click
              </p>
              <button className="mt-14 bg-[#343331] text-white text-2xl w-[291px] h-20 border rounded-[15px]">
                Get Started
              </button>
            </div>
            <div className="w-[401px] h-[529px] mt-4">
              <img src={People} alt="house" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <p className="text-6xl font-semibold ">
                Digital
                <font color="#d38019"> companion </font> <br />
                for your stay!
              </p>
              <p className="mt-6 text-2xl text-[#555351]">
                Open and get your blocked account settled at a
                <br /> faster pace through German bureacracy in just <br /> one
                click
              </p>
              <button className="mt-14 bg-[#343331] text-white text-2xl w-[291px] h-20 border rounded-[15px]">
                Get Started
              </button>
            </div>
            <div className="w-[346px] h-[531px] mt-4">
              <img src={Robot} alt="house" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
