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
import { Link } from "react-router-dom";

export default function SliderComponent() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="w-full flex flex-col md:flex-row items-center justify-around bg-img bg-cover bg-center">
            <div className="m-4">
              <div className="w-[296px] md:w-[617px] h-[52px] md:h-[156px] mx-4 p-2 text-xl md:text-6xl font-semibold text-center md:text-left">
                House hunting made <font color="#d38019"> easy </font> for you!
              </div>
              <div className="w-[296px] md:w-[578px] h-[41px] md:h-[90px] my-2 mx-4 p-2 text-xs md:text-2xl text-[#555351] text-center md:text-left">
                We ease your stress of hunting for houses even before you get
                into Germany.
              </div>
              <div className="relative top-[250px] md:top-0">
                <Link to="/login">
                  <Button
                    text="Login"
                    style="w-[140px] md:w-[291px] h-[44px] md:h-[80px] bg-[#FAE7CF] rounded-[15px] text-[#995D14] text-center text-xl py-2 md:py-4 relative top-10 font-medium mr-2"
                  />
                </Link>
                <Link to="/signup">
                  <Button
                    text="Sign Up"
                    style="w-[140px] md:w-[291px] h-[44px] md:h-[80px] bg-[#D38019] rounded-[15px] text-white text-center text-xl py-2 md:py-4 relative top-10 font-medium"
                  />
                </Link>
              </div>
            </div>
            <div className="w-[222px] md:w-[552px] h-[222px] md:h-[552px] mt-4">
              <img src={House} alt="house" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col md:flex-row items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <div className="w-[268px] md:w-[578px] h-[52px] md:h-[156px] text-xl md:text-6xl font-semibold text-center md:text-left mx-4">
                Health insurance
                <font color="#d38019"> secured </font> for you!
              </div>
              <div className="w-[296px] md:w-[578px] h-[48px] md:h-[90px] mx-4 text-xs md:text-2xl text-[#555351] text-center md:text-left">
                Our health insurance package covers and attains the requirement
                for Visa application and others in an easy catch just for you
              </div>
              <div className="relative top-[250px] md:top-0">
                <Link to="/login">
                  <Button
                    text="Login"
                    style="w-[140px] md:w-[291px] h-[44px] md:h-[80px] bg-[#FAE7CF] rounded-[15px] text-[#995D14] text-center text-xl py-2 md:py-4 relative top-10 font-medium mr-2"
                  />
                </Link>
                <Link to="/signup">
                  <Button
                    text="Sign Up"
                    style="w-[140px] md:w-[291px] h-[44px] md:h-[80px] bg-[#D38019] rounded-[15px] text-white text-center text-xl py-2 md:py-4 relative top-10 font-medium"
                  />
                </Link>
              </div>
            </div>
            <div className="w-[152px] md:w-[364px] h-[233px] md:h-[552px] mt-4">
              <img src={Doctors} alt="house" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col md:flex-row items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <div className="w-[296px] md:w-[578px] h-[52px] md:h-[156px] text-xl md:text-6xl font-semibold text-center md:text-left ">
                German
                <font color="#d38019"> bank account </font>
                provided!
              </div>
              <div className="w-[296px] md:w-[578px] h-[45px] md:h-[90px] mx-4 p-2 text-xs md:text-2xl text-[#555351] text-center md:text-left">
                Bank on us to help you have an account with the best Bank in
                Germany. Open and get your bank account at a faster pace in just
                one click.
              </div>
              <div className="relative top-[250px] md:top-0">
                <Link to="/login">
                  <Button
                    text="Login"
                    style="w-[140px] md:w-[291px] h-[44px] md:h-[80px] bg-[#FAE7CF] rounded-[15px] text-[#995D14] text-center text-xl py-2 md:py-4 relative top-10 font-medium mr-2"
                  />
                </Link>
                <Link to="/signup">
                  <Button
                    text="Sign Up"
                    style="w-[140px] md:w-[291px] h-[44px] md:h-[80px] bg-[#D38019] rounded-[15px] text-white text-center text-xl py-2 md:py-4 relative top-10 font-medium"
                  />
                </Link>
              </div>
            </div>
            <div className="w-[216px] md:w-[433px] h-[216px] md:h-[433px] mt-4">
              <img src={Wallet} alt="house" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col md:flex-row items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <div className="w-[263.82px] md:w-[617px] h-[52px] md:h-[156px] text-xl md:text-6xl font-semibold text-center md:text-left ">
                10% off German
                <font color="#d38019"> language </font> tutorials!
              </div>
              <div className="w-[295px] md:w-[578px] h-[65px] md:h-[135px] mx-4 mb-2 p-2 text-xs md:text-2xl text-[#555351] text-center md:text-left">
                We understood that moving to another country with a different
                language comes with challenges, which is why we've made a
                step-by-step guide to help you crush the language barrier.
              </div>
              <div className="relative top-[220px] md:top-0">
                <Link to="/login">
                  <Button
                    text="Login"
                    style="w-[140px] md:w-[291px] h-[44px] md:h-[80px] bg-[#FAE7CF] rounded-[15px] text-[#995D14] text-center text-xl py-2 md:py-4 relative top-10 font-medium mr-2"
                  />
                </Link>
                <Link to="/signup">
                  <Button
                    text="Sign Up"
                    style="w-[140px] md:w-[291px] h-[44px] md:h-[80px] bg-[#D38019] rounded-[15px] text-white text-center text-xl py-2 md:py-4 relative top-10 font-medium"
                  />
                </Link>
              </div>
            </div>
            <div className="w-[185px] md:w-[401px] h-[244px] md:h-[529px] mt-4">
              <img src={People} alt="house" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col md:flex-row items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <div className="w-[294px] md:w-[648px] h-[52px] md:h-[156px] text-xl md:text-6xl font-semibold text-center md:text-left ">
                Sim card and internet
                <font color="#d38019"> registration </font>
              </div>
              <div className="w-[264.02px] md:w-[578px] h-[80px] md:h-[150px] mx-4 text-xs md:text-2xl text-[#555351] text-center md:text-left mt-2">
                Never get disconnected from your friends and family on your
                arrival in Germany. Get a registered prepaid Sim card with us in
                a speed of light
              </div>
              <div className="relative top-[200px] md:top-0">
                <Link to="/login">
                  <Button
                    text="Login"
                    style="w-[140px] md:w-[291px] h-[44px] md:h-[80px] bg-[#FAE7CF] rounded-[15px] text-[#995D14] text-center text-xl py-2 md:py-4 relative top-10 font-medium mr-2"
                  />
                </Link>
                <Link to="/signup">
                  <Button
                    text="Sign Up"
                    style="w-[140px] md:w-[291px] h-[44px] md:h-[80px] bg-[#D38019] rounded-[15px] text-white text-center text-xl py-2 md:py-4 relative top-10 font-medium"
                  />
                </Link>
              </div>
            </div>
            <div className="w-[154.43px] md:w-[346px] h-[237px] md:h-[531px] md:mt-4">
              <img src={Robot} alt="house" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
