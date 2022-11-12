import React from "react";
import Mastercard from "../assets/logos_mastercard.png";
import Airbnb from "../assets/Vector.png";
import Paypal from "../assets/logos_paypal.png";
import Uber from "../assets/simple-icons_uber.png";
import Visa from "../assets/logos_visaelectron.png";
import Coinbase from "../assets/Vector-1.png";
import { FcCheckmark } from "react-icons/fc";
import Footer from "./Footer";
import SliderComponent from "./Slider";
import Testimonials from "./TestimonialSlide";
import AccordionComponent from "./Accordion";

const Landingpage = () => {
  return (
    <>
      <div className="w-full h-full">
        <SliderComponent />
        <div className="w-full h-[166px] bg-[#edede9] flex items-center justify-evenly">
          <img src={Mastercard} alt="/" className="w-[114px] h-[75px]" />
          <img src={Airbnb} alt="/" className="w-[208px] h-[66px]" />
          <img src={Paypal} alt="/" className="w-[78px] h-[90px]" />
          <img src={Uber} alt="/" className="w-[100px] h-[85px]" />
          <img src={Visa} alt="/" className="w-[131px] h-[60px]" />
          <img src={Coinbase} alt="/" className="w-[247px] h-[50px]" />
        </div>
        <div className="flex flex-col items-center justify-center m-8 p-4">
          <div className="h-[56px] my-6">
            <p className=" font-bold text-4xl">
              Why <font color="#d38019"> WelcomeMe </font>?
            </p>
          </div>
          <div className="mx-8 w-[1220px] h-[470px]">
            <p className="text-2xl text-[#171611] text-center">
              We are tailored to creating a pathbreaking digital assistant for
              both students and young
              <br /> professionals that would help make their journey into
              Germany a seamless one.
              <br />
              <br /> Our offering is an end to end self managed didgital
              interface that lets you manage your journey,
              <br /> from arrival to settling in.
              <br />
              <br /> It includes helping you get a suitable and cheap apartment,
              processing blocked accounts,
              <br /> insurance management and even community integration
              services to help you feel at home
              <br /> even while away from home.
              <br />
              <br /> Our teams are customer-centric, having considered the
              stress that comes with moving into a new country, we've designed a
              robust service to minimize your stress and streamline the entire
              process into one perfect solution.
            </p>
          </div>
        </div>
        <div
          className="flex items-center justify-center 
        m-4"
        >
          <div className="w-[461px] h-[581px] border rounded-[15px] bg-[#e7e9e8] shadow-xl flex flex-col items-center justify-center mr-2 hover:bg-[#343331] hover:text-white hover:h-[660px]">
            <p className="text-2xl font-semibold">Basic Plan</p>
            <div className="w-[385px] border border-[#343331] hover:border-[#ffff]"></div>
            <div className="flex m-4">
              <div className="w-6 h-6 mr-2">
                <FcCheckmark size={20} />
              </div>
              <div className="text-xl w-[192px]">Basic plan features</div>
            </div>
            <div className="flex m-4">
              <div className="w-6 h-6 mr-2">
                <FcCheckmark size={20} />
              </div>
              <div className="text-xl w-[192px]">Health Insurance</div>
            </div>
            <div className="flex m-4">
              <div className="w-6 h-6 mr-2">
                <FcCheckmark size={20} />
              </div>
              <div className="text-xl w-[300px]">Blocked account provision</div>
            </div>
            <div className="flex m-4">
              <div className="w-6 h-6 mr-2">
                <FcCheckmark size={20} />
              </div>
              <div className="text-xl w-[320px]">
                Free German language tutorials
              </div>
            </div>
            <div className="w-[265px] h-[70px] bg-[#343331] border rounded-[15px] text-white text-center text-xl py-4 relative top-20 hover:bg-white hover:text-[#343331] hover:font-semibold">
              Get started
            </div>
          </div>
          <div className="w-[461px] h-[581px] border rounded-[15px] bg-[#e7e9e8] shadow-xl flex flex-col items-center justify-center mr-2 hover:bg-[#343331] hover:text-white hover:h-[660px]">
            <p className="text-2xl font-semibold">Basic Plan</p>
            <div className="w-[385px] border border-[#343331] hover:border-[#ffff]"></div>
            <div className="flex m-4">
              <div className="w-6 h-6 mr-2">
                <FcCheckmark size={20} />
              </div>
              <div className="text-xl w-[192px]">Basic plan features</div>
            </div>
            <div className="flex m-4">
              <div className="w-6 h-6 mr-2">
                <FcCheckmark size={20} />
              </div>
              <div className="text-xl w-[192px]">Health Insurance</div>
            </div>
            <div className="flex m-4">
              <div className="w-6 h-6 mr-2">
                <FcCheckmark size={20} />
              </div>
              <div className="text-xl w-[300px]">Blocked account provision</div>
            </div>
            <div className="flex m-4">
              <div className="w-6 h-6 mr-2">
                <FcCheckmark size={20} />
              </div>
              <div className="text-xl w-[320px]">
                Free German language tutorials
              </div>
            </div>
            <div className="w-[265px] h-[70px] bg-[#343331] border rounded-[15px] text-white text-center text-xl py-4 relative top-20 hover:bg-white hover:text-[#343331] hover:font-semibold">
              Get started
            </div>
          </div>
          <div className="w-[461px] h-[581px] border rounded-[15px] bg-[#e7e9e8] shadow-xl flex flex-col items-center justify-center mr-2 hover:bg-[#343331] hover:text-white hover:h-[660px]">
            <p className="text-2xl font-semibold">Basic Plan</p>
            <div className="w-[385px] border border-[#343331] hover:border-[#ffff]"></div>
            <div className="flex m-4">
              <div className="w-6 h-6 mr-2">
                <FcCheckmark size={20} />
              </div>
              <div className="text-xl w-[192px]">Basic plan features</div>
            </div>
            <div className="flex m-4">
              <div className="w-6 h-6 mr-2">
                <FcCheckmark size={20} />
              </div>
              <div className="text-xl w-[192px]">Health Insurance</div>
            </div>
            <div className="flex m-4">
              <div className="w-6 h-6 mr-2">
                <FcCheckmark size={20} />
              </div>
              <div className="text-xl w-[300px]">Blocked account provision</div>
            </div>
            <div className="flex m-4">
              <div className="w-6 h-6 mr-2">
                <FcCheckmark size={20} />
              </div>
              <div className="text-xl w-[320px]">
                Free German language tutorials
              </div>
            </div>
            <div className="w-[265px] h-[70px] bg-[#343331] border rounded-[15px] text-white text-center text-xl py-4 relative top-20 hover:bg-white hover:text-[#343331] hover:font-semibold">
              Get started
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center font-semibold text-4xl mt-20">
          Testimonials
        </div>
        <Testimonials />
        <div className="flex items-center justify-center font-semibold text-4xl mb-4">
          Frequently Asked Questions
        </div>
        <AccordionComponent />
        <Footer />
      </div>
    </>
  );
};

export default Landingpage;
