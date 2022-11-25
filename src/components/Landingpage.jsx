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
import TypeA from "../assets/typeA.png";
import TypeB from "../assets/typeB.png";

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
            <p className="text-center">Values</p>
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
          <div className="font-bold text-4xl my-10">
            Payment <font color="#d38019">Plans</font>
          </div>
          <div className="relative mb-[100px]">
            <div>
              <img src={TypeA} alt="Category A" />
            </div>
            <div className="absolute w-[578px] h-full bg-white top-[104px] right-[104px] shadow-lg flex flex-col">
              <div className="text-center bg-[#c4c4c4] h-20 font-medium text-3xl p-4">
                Type A
              </div>
              {/* <div className="bg-green-700">
                vbkkbnkgnbkdfnkj
              </div> */}
            </div>
          </div>
          <div className="relative">
            <div>
              <img src={TypeB} alt="Category B" />
            </div>
            <div className="absolute w-[578px] h-full bg-white top-[104px] left-[104px] shadow-lg">
              hdbuknukcf
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center 
        m-4"
        ></div>
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
