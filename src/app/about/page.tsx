import React from "react";
import PageHeader from "@/components/pageheaders/PageHeader";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import InfoSectionTypeOne from "@/components/infoSection/InfoSectionTypeOne";
import GoogleMapComponent from "@/components/map/GoogleMap";
import CardTypeTwo from "@/components/cards/CardTypeTwo";
import services from "@/uiControllers/worksData.json";

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="About Us" />
      <div className="flex flex-col items-center">
        <TwoLineTitle
          main="Discover Our Journey"
          des="Join us as we uncover the hidden gems and popular spots that make our destination a must-visit."
        />
        <div className="max-w-[1140px] my-8">
          <InfoSectionTypeOne />
        </div>
        <TwoLineTitle
          main="Top Attractions"
          des="Explore the most popular attractions that captivate tourists from around the world."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:w-[1140px] 2xl:w-[1440px] pb-8 mx-4 md:mx-8 pt-0">
          {services.map((card, index) => (
            <CardTypeTwo key={index} {...card} />
          ))}
        </div>

        <GoogleMapComponent />
      </div>
    </div>
  );
};

export default AboutPage;
