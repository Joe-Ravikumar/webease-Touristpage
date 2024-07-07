import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import HeroCard from "@/components/cards/HeroCard";
import CardTypeTwo from "@/components/cards/CardTypeTwo";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import cardData from "@/uiControllers/cardData.json";
import InfoSectionTypeOne from "@/components/infoSection/InfoSectionTypeOne";
import ContactForm from "@/components/forms/ContactForm";
import GoogleMapComponent from "@/components/map/GoogleMap";
import NumberSpringBanner from "@/components/banner/NumberSpringBanner";
import worksData from "@/uiControllers/worksData.json";
import CarosalTypeOne from "@/components/carosals/CarosalTypeOne";

export default function Home() {
  // Ensure cardData is an array
  const cards = Array.isArray(cardData) ? cardData : [];

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <HeroSection />
        <HeroCard />
        <TwoLineTitle
          main="Who We Are?"
          des="Explore our vibrant collection of artisanal goods and find the perfect piece to add a touch of elegance to your life."
        />
        <InfoSectionTypeOne />
        <TwoLineTitle
          main="Discover our Unique Services"
          des="Explore our vibrant collection of artisanal goods and find the perfect piece to add a touch of elegance to your life."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:w-[1140px] 2xl:w-[1340px] pb-8 mx-4 md:mx-8 pt-0">
          {/* Render four card components */}
          {cards.map((card, index) => (
            <CardTypeTwo key={index} {...card} />
          ))}
        </div>
        <NumberSpringBanner />
        <TwoLineTitle
          main="Discover our Previous Works"
          des="Explore our vibrant collection of artisanal goods and find the perfect piece to add a touch of elegance to your life."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:w-[1140px] 2xl:w-[1340px] pb-8 mx-4 md:mx-8 pt-0">
          {/* Render four card components */}
          {worksData.map((card, index) => (
            <CardTypeTwo key={index} {...card} />
          ))}
        </div>
        <TwoLineTitle
          main="Testimonials"
          des="Explore our vibrant collection of artisanal goods and find the perfect piece to add a touch of elegance to your life."
        />
        <div className="max-w-[1140px]">
          <CarosalTypeOne />
        </div>
        <TwoLineTitle
          main="Contact Us"
          des="Explore our vibrant collection of artisanal goods and find the perfect piece to add a touch of elegance to your life."
        />
        <ContactForm />
        <GoogleMapComponent />
      </div>
    </>
  );
}
