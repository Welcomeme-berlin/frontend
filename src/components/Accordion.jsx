import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const AccordionComponent = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="mx-4 my-4 lg:flex flex-col items-center justify-center"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="w-[1200px] h-[100px] border rounded-[30px] p-10 shadow-lg font-medium text-[#6d7276] uppercase"
        >
          01 Housing
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br /> Sapien eget mi proin sed libero. At quis risus sed vulputate
          odio. Vitae congue mauris rhoncus aenean. Amet mauris commodo quis
          imperdiet.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        className="mx-4 my-4 lg:flex flex-col items-center justify-center"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="w-[1200px] h-[100px] border rounded-[30px] p-10 shadow-lg font-medium text-[#6d7276] uppercase"
        >
          02 Insurance
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br /> Sapien eget mi proin sed libero. At quis risus sed vulputate
          odio. Vitae congue mauris rhoncus aenean. Amet mauris commodo quis
          imperdiet.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="mx-4 my-4 lg:flex flex-col items-center justify-center"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="w-[1200px] h-[100px] border rounded-[30px] p-10 shadow-lg font-medium text-[#6d7276] uppercase"
        >
          03 German blocked account
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br /> Sapien eget mi proin sed libero. At quis risus sed vulputate
          odio. Vitae congue mauris rhoncus aenean. Amet mauris commodo quis
          imperdiet.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
};
export default AccordionComponent;
