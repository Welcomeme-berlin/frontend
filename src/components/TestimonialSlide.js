import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Damilare from "../assets/testimonial.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <div className="w-[353px] h-[628px] flex items-center justify-center mr-10">
              <img src={Damilare} alt="house" />
            </div>
            <div className="flex flex-col">
              <div className="w-24 h-24">
                <FaQuoteLeft size={40} color="#6D7276" />
              </div>
              <div className="w-[540px] h-[111px]">
                <p className="text-2xl italic text-[#6D7276]">
                  One of the best! It was a great experience house-hunting with
                  the WelcomeMe app, it was less stressful and easy!.
                </p>
              </div>
              <div className="w-24 h-24 relative left-[500px]">
                <FaQuoteRight size={40} color="#6D7276" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <div className="w-[353px] h-[628px] flex items-center justify-center mr-10">
              <img src={Damilare} alt="house" />
            </div>
            <div className="flex flex-col">
              <div className="w-24 h-24">
                <FaQuoteLeft size={40} color="#6D7276" />
              </div>
              <div className="w-[540px] h-[111px]">
                <p className="text-2xl italic text-[#6D7276]">
                  One of the best! It was a great experience house-hunting with
                  the WelcomeMe app, it was less stressful and easy!.
                </p>
              </div>
              <div className="w-24 h-24 relative left-[500px]">
                <FaQuoteRight size={40} color="#6D7276" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Testimonials;
