import Planoffer from "./Planoffer";
import { FiPackage } from "react-icons/fi";
import { MdCategory } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";
const Typecards = () => {
  const offers = [
    {
      Type: "Type A",
      parts: [
        {
          title: "Category",
          details: ["For University students below 30 years of age."],
          IconTitle: MdCategory,
        },
        {
          title: "Package",
          details: [
            "Incoming insurance (Visa requirement)",
            "Public health insurance (Required during studies)",
            "Sim card purchase & consultancy",
            "0% discount on German school",
            "Aid in getting BAfoG (A German government grant & loan for students - not applicable to PHD students).",
          ],
          IconTitle: FiPackage,
        },
        {
          title: "Price",
          details: ["Fundamentals of React"],
          IconTitle: GiPriceTag,
        },
      ],
    },
    {
      Type: "Type B",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
        },
      ],
    },
  ];
  return (
    <div className="w-full shadow-2xl max-w-[490px] h-[890px] bg-[#FFFCF8] ml-[600px] right top-[1700px] absolute items-center">
      <Planoffer offers={offers[0]} />
    </div>
  );
};

export default Typecards;
