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
          <span className="text-white text-[1.8rem]">Cy</span>clone
        </h1>
      </div>
      {/* right side */}

    </div>
  );
};

export default Navbar;