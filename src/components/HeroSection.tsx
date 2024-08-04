'use client'
import React from "react";
import { useState } from "react";
import Button from "./button/Button";
import Login from "./login/Login";

const HeroSection: React.FC = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="h-screen flex items-center justify-center overflow-hidden">
  
      <div className="absolute inset-0 bg-gradient-to-r from-[#8781DB] to-transparent opacity-50"></div>
      <div className="h-full pt-16 flex flex-col-reverse xl:flex-row items-center justify-center xl:max-w-[1140px] 2xl:max-w-[1340px] z-10">
        <div className="w-3/4 md:w-1/2 flex flex-col items-start">
          <h1 className="text-3xl md:text-8xl 2xl:text-[7rem] text-white font-bold pb-4 2xl:pb-8">
            Discover Unique Destination
          </h1>
          <h1 className="md:text-lg 2xl:text-2xl text-white font-base pb-8 pr-8 2xl:pb-8">
          Travel takes us out of our comfort zones and inspires us to see, taste and try new things
          </h1>
          <Button btnText="Get Connect" border="2px solid" borderColor="#ffffff" backgroundColor="transparent" fontColor="white" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center xl:justify-end">
          <img
            src="assets/images/bg/firstbg.png"
            alt="webEase-hero-image"
            className="w-1/2 md:w-full h-full object-cover"
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
