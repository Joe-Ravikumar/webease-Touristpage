import PageHeader from "@/components/pageheaders/PageHeader";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import React from "react";
import services from "@/uiControllers/worksData.json";
import CardTypeTwo from "@/components/cards/CardTypeTwo";
import NumberSpringBanner from "@/components/banner/NumberSpringBanner";

const Portfolio: React.FC = () => {
  return (
    <div>
      <PageHeader title="Destinations" />
      <div className="flex flex-col items-center">
        <TwoLineTitle
          main="Historical Landmarks"
          des="Discover the rich history and cultural heritage of our top historical landmarks."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:w-[1140px] 2xl:w-[1440px] pb-8 mx-4 md:mx-8 pt-0">
          {services.map((card, index) => (
            <CardTypeTwo key={index} {...card} />
          ))}
        </div>
        <TwoLineTitle
          main="Natural Wonders"
          des="Explore the breathtaking natural wonders that our destination has to offer."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:w-[1140px] 2xl:w-[1440px] pb-8 mx-4 md:mx-8 pt-0">
          {services.map((card, index) => (
            <CardTypeTwo key={index} {...card} />
          ))}
        </div>
        <TwoLineTitle
          main="Cultural Hotspots"
          des="Immerse yourself in the vibrant culture and traditions at our must-visit cultural hotspots."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:w-[1140px] 2xl:w-[1440px] pb-8 mx-4 md:mx-8 pt-0">
          {services.map((card, index) => (
            <CardTypeTwo key={index} {...card} />
          ))}
        </div>

        <NumberSpringBanner />
      </div>
    </div>
  );
};

export default Portfolio;
