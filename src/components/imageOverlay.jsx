import img from "../assets/accBackground.png";
import Typecards from "./Typecards";
const Imageoverlay = () => {
  return (
    <>
      <div className="w-full max-w-[1243px] h-[658px] rounded-lg shadow-1xl overflow-hidden relative">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={img}
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      </div>
      <Typecards />
    </>
  );
};

export default Imageoverlay;
