import React from "react";
import logo from "../Logos/Logo.png";
import { Link } from "react-scroll";

// from-white to-black text-transparent bg-clip-text

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div
      className="bg-[#020202] text-white xl:px-28 md:px-22 px-8 p-5 flex : ;
        justify-between items-center"
    >
      {/* logo left */}
      <div className="-ml-6 flex items-center">
        <img src={logo} alt="" className="w-[95px] h-[92px]" />
        <h1 className="-ml-2 montserrat-subheading sm:text-[1.8rem] font-extrabold text-[1.6rem] text-[#FFDE59]">
          Cyclone
        </h1>
      </div>
      {/* right side */}
      <div className="flex space-x-1 items-center">
        <Link spy={true} smooth={true} to="howitworks">
          <p
            className="text-gray-700 hover:text-gray-900 hover:border-[#FFDE59] p-1 sm:px-4  
            montserrat-subtitle cursor-pointer border-b border-black
            sm:text-[1.3rem] text-[1.1rem] font-semibold"
          >
            Tutorial
          </p>
        </Link>
        {/* theme button */}
      </div>
    </div>
  );
};

export default Navbar;