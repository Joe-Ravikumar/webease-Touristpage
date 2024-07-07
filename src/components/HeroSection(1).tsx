import React from "react";
import Button from "./button/Button";

const HeroSection: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center overflow-hidden">
      <img
        src="assets/images/bg/main-bg.webp"
        alt="webEase-hero-image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#8781DB] to-transparent opacity-50"></div>
      <div className="h-full pt-16 flex flex-col-reverse xl:flex-row items-center justify-center xl:max-w-[1140px] 2xl:max-w-[1340px] z-10">
        <div className="w-3/4 md:w-1/2 flex flex-col items-start">
          <h1 className="text-3xl md:text-8xl 2xl:text-[7rem] text-white font-bold pb-4 2xl:pb-8">
            Discover Unique Creations
          </h1>
          <h1 className="md:text-lg 2xl:text-2xl text-white font-base pb-8 pr-8 2xl:pb-8">
            Explore our vibrant collection of artisanal goods and find the
            perfect piece to add a touch of elegance to your life.
          </h1>
          <Button btnText="Get Started" border="2px solid" borderColor="#ffffff" backgroundColor="transparent" fontColor="white" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center xl:justify-end">
          <img
            src="assets/images/hero/hero-ele-2.webp"
            alt="webEase-hero-image"
            className="w-1/2 md:w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
