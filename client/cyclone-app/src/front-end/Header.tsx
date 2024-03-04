import React from "react";
import { useNavigate } from "react-router-dom";
import Info from "./Info";
import cover from "../assets/cover.png"

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-[#040404] xl:px-36 md:px-22 px-8 sm:py-27 py-16 flex w-[100%]
          justify-between items-center md:flex-row flex-col space-y-1 text-gray-300"
      >
        {/* left side */}
        <div className="flex flex-col items-start space-y-4 ml-6 w-[60%]  md:w-[70%]">
          {/* features  texts */}
          <div className="flex montserrat-heading font-semibold space-x-6 items-center">
            {/* inner boxes */}
            <span
              className="p-1 px-8 border-2
             border-gray-300 rounded-full"
            >
              Easy to Use
            </span>
            <span
              className="p-1 px-8 border-2
             border-gray-300 rounded-full"
            >
              Secure
            </span>
          </div>

          <h2
            className="flex text-gray-300 space-y-4 xl:-space-y-2 max-w-[700px] montserrat-heading font-extrabold
            text-left text-[1.9rem] md:text-[1.5rem] xl:text-[2.4rem]"
          >
            <span>Stay Anonymous & secure</span>
          </h2>
          <p
            className="montserrat-heading font-semibold pb-1 text-gray-300
           text-left break-words  max-w-[700px] sm:text-[1.2rem] text-[1rem]"
          >
  
            Get BNB and Dai privately with random link.
          </p>
          <button
            className="border-2 montserrat-subtitle  
            hover:scale-95 transition-all ease-linear p-1 px-10 rounded-full border-[#FFDE59] 
             montserrat-subtitle font-bold  text-xl bg-black text-[#FFDE59]"
            onClick={() => navigate("/Cyclone")}
          >
            Launch App
          </button>
        </div>

        {/* right Banner */}
        <div className="flex justify-end items-center w-[40%] ">
          <img
            className="md:mt-0 mt-10 rounded-[1.8rem] object-center 
            shadow-sm shadow-[#757575]"
            src={cover}
            height={1200}
            width={1000}
            alt=""
          />
      
        </div>
        
      </div>
      <Info/>
    </>
  );
};

export default Header;