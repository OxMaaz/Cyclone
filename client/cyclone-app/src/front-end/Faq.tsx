import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

type Props = {};

const Faq = (props: Props) => {
  const [showAnswers, setShowAnswers] = useState<boolean[]>([]);

  const toggleAnswer = (index: number) => {
    const updatedShowAnswers = [...showAnswers];
    updatedShowAnswers[index] = !updatedShowAnswers[index];
    setShowAnswers(updatedShowAnswers);
  };

  return (
    <div
      id="faq"
      className="p-5 py-10 flex flex-col items-center justify-center bg-[#020202] "
    >
      <h1 className="montserrat-subheading text-4xl mb-6 text-[#FFDE59]  pb-2 ">
        FAQ
      </h1>
      <div
        className="xl:p-14 xl:px-20 bg-[#040404] transition-all ease-linear md:w-[790px] lg:w-[900px] p-5 rounded-md
       shadow-lg flex flex-col items-start justify-center"
      >
        <h4
          onClick={() => toggleAnswer(0)}
          className={`${showAnswers[0]} text-left justify-between w-full  hover:text-gray-700
        lg:text-lg cursor-pointer flex items-center
         montserrat-subheading py-4 text-gray-200 gap-16`}
        >
          1: How to use Cyclone?
          <span>
            {showAnswers[0] ? (
              <IoAddSharp
                color="#FFDE59"
                className="lg:text-4xl text-3xl rotate-45 transition-all duration-100"
              />
            ) : (
              <IoAddSharp
                color="#FFDE59"
                className="lg:text-4xl text-3xl duration-100"
              />
            )}
          </span>
        </h4>
        {showAnswers[0] && (
          <p className=" w-[90%] px-4  pb-5  montserrat-subheading text-[#58707e] text-left">
            Generate a Cyclone key and store it with its corresponding signature . Now share only your Cyclone key (or you can also share its "link" ) with sender and ask him to send you funds
            through https://Cyclone.live/Cyclone . When he initates the the transaction using your Cyclone key a new unknown address would be generated with the funds he sent, which only you are able to access by the help of your saved signature key.
           

          </p>
        )}
        <h4
          onClick={() => toggleAnswer(1)}
          className={`${showAnswers[1]} text-left justify-between w-full  hover:text-gray-700
        lg:text-lg cursor-pointer flex items-center
         montserrat-subheading py-4 text-gray-200 gap-16`}
        >
          2: How does Cyclone ensure the privacy and confidentiality of financial
          transactions?
          <span>
            {showAnswers[1] ? (
              <IoAddSharp
                color="#FFDE59"
                className="lg:text-4xl text-3xl rotate-45 transition-all duration-100"
              />
            ) : (
              <IoAddSharp
                color="#FFDE59"
                className="lg:text-4xl text-3xl duration-100"
              />
            )}
          </span>
        </h4>
        {showAnswers[1] && (
          <p className=" w-[90%] px-4  pb-5  montserrat-subheading text-[#58707e] text-left">
            Cyclone employs secure stealth addresses and a one-time public key
            mechanism, making it hard to trace or monitor
transactions by anyone else. This ensures enhanced privacy and
            confidentiality.
          </p>
        )}
       
      
        <h4
          onClick={() => toggleAnswer(3)}
          className={`${showAnswers[3] && "dark:text-[#09d8a1]"
            } text-left justify-between w-full dark:text-white dark:hover:text-[white] dark:hover:shadow-lg hover:text-gray-700
        lg:text-lg cursor-pointer flex items-center
         montserrat-subheading py-4 text-gray-200 gap-16`}
        >
          4: How do I generate a unique Cyclone key?
          <span>
            {showAnswers[3] ? (
              <IoAddSharp
                color="#FFDE59"
                className="lg:text-4xl text-3xl rotate-45 transition-all duration-100"
              />
            ) : (
              <IoAddSharp
                color="#FFDE59"
                className="lg:text-4xl text-3xl duration-100"
              />
            )}
          </span>
        </h4>
        {showAnswers[3] && (
          <p className=" w-[90%] px-4  pb-5  montserrat-subheading text-[#58707e] text-left">
            Simply click the "generate" button , and a unique Cyclone key will be
            generated for you . Make sure to save the accompanying signature key
            in a secure location .
          </p>
        )}
       
      

      

   
        
      </div>
    </div>
  );
};

export default Faq;