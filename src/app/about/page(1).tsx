import InfoSectionTypeOne from "@/components/infoSection/InfoSectionTypeOne";
import GoogleMapComponent from "@/components/map/GoogleMap";
import PageHeader from "@/components/pageheaders/PageHeader";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import React from "react";
import services from "@/uiControllers/worksData.json";
import CardTypeTwo from "@/components/cards/CardTypeTwo";

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="About Us" />
      <div className="flex flex-col items-center">
        <TwoLineTitle
          main="Discover Our Story"
          des="Join us as we explore the hidden gems and popular destinations that make our city unique."
        />
        <div className="max-w-[1140px]">
          <InfoSectionTypeOne />
        </div>
        <TwoLineTitle
          main="Top Attractions"
          des="From historical landmarks to breathtaking natural scenery, find out what makes our location a must-visit."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:w-[1140px] 2xl:w-[1440px] pb-8 mx-4 md:mx-8 pt-0">
          {/* Render four card components */}
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
