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
          <div className="w-full flex items-center justify-around bg-img bg-cover bg-center">
            <div className="m-4">
              <div className="w-[617px] h-[156px] mx-4 p-2 text-6xl font-semibold ">
                House hunting made <font color="#d38019"> easy </font> for you!
              </div>
              <div className="w-[578px] h-[90px] mx-4 p-2 text-2xl text-[#555351]">
                We ease your stress of hunting for houses even before you get
                into Germany.
              </div>
              <Link to="/login">
                <Button
                  text="Login"
                  style="w-[291px] h-[80px] bg-[#FAE7CF] rounded-[15px] text-[#995D14] text-center text-xl py-4 relative top-10 font-medium mr-2"
                />
              </Link>
              <Link to="/signup">
                <Button
                  text="Sign Up"
                  style="w-[291px] h-[80px] bg-[#D38019] rounded-[15px] text-white text-center text-xl py-4 relative top-10 font-medium"
                />
              </Link>
            </div>
            <div className="w-[552px] h-[552px] mt-4">
              <img src={House} alt="house" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <div className="w-[578px] h-[156px] text-6xl font-semibold ">
                Health insurance
                <font color="#d38019"> secured </font> for you!
              </div>
              <div className="w-[578px] h-[90px] mx-4 text-2xl text-[#555351]">
                Our health insurance package covers and attains the requirement
                for Visa application and others in an easy catch just for you
              </div>
              <Link to="/login">
                <Button
                  text="Login"
                  style="w-[291px] h-[80px] bg-[#FAE7CF] rounded-[15px] text-[#995D14] text-center text-xl py-4 relative top-10 font-medium mr-2"
                />
              </Link>
              <Link to="/signup">
                <Button
                  text="Sign Up"
                  style="w-[291px] h-[80px] bg-[#D38019] rounded-[15px] text-white text-center text-xl py-4 relative top-10 font-medium"
                />
              </Link>
            </div>
            <div className="w-[364px] h-[552px] mt-4">
              <img src={Doctors} alt="house" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <div className="w-[578px] h-[156px] text-6xl font-semibold ">
                German
                <font color="#d38019"> bank account </font>
                provided!
              </div>
              <div className="w-[578px] h-[90px] mx-4 p-2 text-2xl text-[#555351]">
                Bank on us to help you have an account with the best Bank in
                Germany. Open and get your bank account at a faster pace in just
                one click.
              </div>
              <Link to="/login">
                <Button
                  text="Login"
                  style="w-[291px] h-[80px] bg-[#FAE7CF] rounded-[15px] text-[#995D14] text-center text-xl py-4 relative top-10 font-medium mr-2"
                />
              </Link>
              <Link to="/signup">
                <Button
                  text="Sign Up"
                  style="w-[291px] h-[80px] bg-[#D38019] rounded-[15px] text-white text-center text-xl py-4 relative top-10 font-medium"
                />
              </Link>
            </div>
            <div className="w-[433px] h-[433px] mt-4">
              <img src={Wallet} alt="house" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <div className="w-[617px] h-[156px] text-6xl font-semibold ">
                10% off German
                <font color="#d38019"> language </font> tutorials!
              </div>
              <div className="w-[578px] h-[135px] mx-4 mb-2 p-2 text-2xl text-[#555351]">
                We understood that moving to another country with a different
                language comes with challenges, which is why we've made a
                step-by-step guide to help you crush the language barrier.
              </div>
              <Link to="/login">
                <Button
                  text="Login"
                  style="w-[291px] h-[80px] bg-[#FAE7CF] rounded-[15px] text-[#995D14] text-center text-xl py-4 relative top-10 font-medium mr-2"
                />
              </Link>
              <Link to="/signup">
                <Button
                  text="Sign Up"
                  style="w-[291px] h-[80px] bg-[#D38019] rounded-[15px] text-white text-center text-xl py-4 relative top-10 font-medium"
                />
              </Link>
            </div>
            <div className="w-[401px] h-[529px] mt-4">
              <img src={People} alt="house" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <div className="w-[648px] h-[156px] text-6xl font-semibold ">
                Sim card and internet
                <font color="#d38019"> registration </font>
              </div>
              <div className="w-[578px] h-[150px] mx-4 text-2xl text-[#555351]">
                Never get disconnected from your friends and family on your
                arrival in Germany. Get a registered prepaid Sim card with us in
                a speed of light
              </div>
              <Link to="/login">
                <Button
                  text="Login"
                  style="w-[291px] h-[80px] bg-[#FAE7CF] rounded-[15px] text-[#995D14] text-center text-xl py-4 relative top-10 font-medium mr-2"
                />
              </Link>
              <Link to="/signup">
                <Button
                  text="Sign Up"
                  style="w-[291px] h-[80px] bg-[#D38019] rounded-[15px] text-white text-center text-xl py-4 relative top-10 font-medium"
                />
              </Link>
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
