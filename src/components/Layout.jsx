import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineLock } from "react-icons/ai";
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsSim,
  BsPersonXFill,
} from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Icon from "../assets/icon.png";
import Person from "../assets/profile.png";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Overview", path: "/dashboard" },
    {
      title: "My apartments",
      icon: <BiHomeAlt />,
      submenu: true,
      submenuItems: [
        {
          title: "Rent apartments",
          path: "/rent-apartments",
        },
        {
          title: "List apartments",
          path: "/list-apartments",
        },
        {
          title: "Manage apartments",
          path: "/manage-apartments",
        },
        {
          title: "Transactions",
          path: "/transactions",
        },
      ],
    },
    {
      title: "Blocked account ",
      icon: <AiOutlineLock />,
      path: "/directories",
    },
    {
      title: "Insurance",
      icon: <FaRegMoneyBillAlt />,
      path: "/employee",
    },
    {
      title: "Sim card",
      icon: <BsSim />,
      path: "/register",
    },
  ];
  const SidebarLinks = ({ menu }) => {
    return (
      <NavLink to={menu.path}>
        <li
          className={`text-white flex items-center gap-x-4 cursor-pointer p-2 font-semibold text-xl rounded-md mt-2 ${
            menu.spacing ? "mt-9" : "mt-2"
          }`}
        >
          <span className="text-2xl block float-left">
            {menu.icon ? menu.icon : <MdOutlineDashboardCustomize />}
          </span>
          <span
            className={`text-base flex-1 font-medium duration-200 ${
              !open && "hidden"
            }`}
          >
            {menu.title}
          </span>
          {menu.submenu && open && (
            <BsChevronDown
              className={`${submenuOpen && "rotate-180"}`}
              onClick={() => {
                setSubmenuOpen(!submenuOpen);
              }}
            />
          )}
        </li>
        {menu.submenu && submenuOpen && open && (
          <ul className="flex flex-col items-center p-2">
            {menu.submenuItems.map((submenuItem, index) => (
              <Link to={submenuItem.path}>
                <li
                  key={index}
                  className="flex items-center gap-x-4 cursor-pointer p-2 px-5 text-white font-medium rounded-md mt-2"
                >
                  {submenuItem.title}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </NavLink>
    );
  };
  return (
    <div className="flex w-full h-full">
      <div
        className={`bg-[#171611] h-screen ${
          open ? "w-[325px]" : "w-[100px]"
        } duration-300 relative rounded-r-3xl`}
      >
        <BsArrowLeftShort
          className={`bg-[#DEB37E] text-white text-3xl rounded-full absolute -right-3 top-9 border border-[#DEB37E] cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex items-center m-10">
          <img
            src={Icon}
            alt="WelcomeMeIcon"
            className={`w-14 h-12 duration-500 ${open && "rotate-[360deg]"}`}
          />
          <div
            className={`w-60 h-10 font-semibold text-2xl text-white text-center origin-left duration-300 ${
              !open && "scale-0"
            }`}
          >
            Welcome<font color="#DEB37E">Me</font>
          </div>
        </div>
        <ul className="p-10">
          {Menus.map((menu, index) => (
            <SidebarLinks key={index} menu={menu} />
          ))}
        </ul>
        <div className="flex flex-col items-center justify-center relative top-28">
          <img
            src={Person}
            alt="profile-picture"
            className="w-[109px] h-[105px] rounded-full"
          />
          <div className="text-white font-semibold text-xl my-2">Jane Doe</div>
          <p className="font-medium text-base text-[#fbfaf9]">
            janedoe@gmail.com
          </p>
          <div className="flex m-4 p-2 text-2xl text-white">
            <BsPersonXFill className="mr-8" />
            <RiLogoutBoxRLine />
          </div>
        </div>
      </div>
      <main className="w-full h-full px-10 my-10">{children}</main>
      {/* bg-gray-50 - Removed from the children classname above */}
    </div>
  );
};

export default Layout;
