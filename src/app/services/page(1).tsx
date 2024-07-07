import PageHeader from "@/components/pageheaders/PageHeader";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import React from "react";
import services from "@/uiControllers/worksData.json";
import CardTypeTwo from "@/components/cards/CardTypeTwo";
import NumberSpringBanner from "@/components/banner/NumberSpringBanner";
import CarosalTypeOne from "@/components/carosals/CarosalTypeOne";

const Services: React.FC = () => {
  return (
    <div>
      <PageHeader title="Our Services" />
      <div className="flex flex-col items-center">
        <TwoLineTitle
          main="Adventure Tours"
          des="Join us on exciting adventures through scenic landscapes and thrilling activities."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:w-[1140px] 2xl:w-[1440px] pb-8 mx-4 md:mx-8 pt-0">
          {services.map((card, index) => (
            <CardTypeTwo key={index} {...card} />
          ))}
        </div>
        <TwoLineTitle
          main="Cultural Excursions"
          des="Immerse yourself in the rich cultural heritage of our destinations with our curated excursions."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:w-[1140px] 2xl:w-[1440px] pb-8 mx-4 md:mx-8 pt-0">
          {services.map((card, index) => (
            <CardTypeTwo key={index} {...card} />
          ))}
        </div>
        <TwoLineTitle
          main="Relaxation Retreats"
          des="Unwind and rejuvenate at our luxurious retreats designed for ultimate relaxation."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:w-[1140px] 2xl:w-[1440px] pb-8 mx-4 md:mx-8 pt-0">
          {services.map((card, index) => (
            <CardTypeTwo key={index} {...card} />
          ))}
        </div>

        <NumberSpringBanner />
      </div>
      <TwoLineTitle
        main="Traveler Testimonials"
        des="Hear from our happy travelers about their memorable experiences with us."
      />
      <div className="max-w-[1140px]">
        <CarosalTypeOne />
      </div>
    </div>
  );
};

export default Services;
