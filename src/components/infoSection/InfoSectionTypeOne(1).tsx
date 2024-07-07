import React from "react";

const InfoSectionTypeOne: React.FC = () => {
  return (
    <div className="xl:h-[70vh] 2xl:h-[60vh] flex items-center justify-center overflow-hidden rounded-xl shadow-md shadow-slate-200 hover:shadow-slate-300 hover:shadow-md xl:mb-8  m-4 md:m-8 xl:m-0">
      {/* <img
        src="assets/images/bg/main-bg.webp"
        alt="webEase-hero-image"
        className="absolute inset-0 w-full h-full object-cover"
      /> */}
      <div className="absolute bg-gradient-to-r from-[#8781DB] to-transparent"></div>
      <div className="h-full flex flex-col-reverse xl:flex-row items-center justify-center xl:max-w-[1140px] 2xl:max-w-[1340px] z-10">
        <div className="xl:w-1/2 flex flex-col items-start m-4">

          <h1 className="text-md 2xl:text-xl text-[#737373] font-base xl:pl-16 xl:pr-8 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodoconsequat. Duis aute irure dolor in
            reprehenderit in voluptate velit essecillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.

            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodoconsequat. Duis aute irure dolor in
            reprehenderit in voluptate velit essecillum dolore eu fugiat nulla
            pariatur.
          </h1>
        </div>
        <div className="w-full xl:w-1/2 h-full flex xl:justify-end pr-16 bg-[#80BBFF] items-center">
          <img
            src="assets/images/services/graphic-pc.webp"
            alt="webEase-about-image"
            className="xl:h-4/3 2xl:h-5/6 w-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSectionTypeOne;
