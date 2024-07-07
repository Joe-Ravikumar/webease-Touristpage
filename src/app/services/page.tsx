import React from "react";
import PageHeader from "@/components/pageheaders/PageHeader";
import CardTypeTwo from "@/components/cards/CardTypeTwo";
import services from "@/uiControllers/servicesData.json";

const Services: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Explore the best experiences we offer"
        backgroundImage="/images/services-header.jpg"
      />
      <div className="flex flex-col items-center py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Discover Our Exciting Services
          </h2>
          <p className="text-lg text-gray-700">
            From adventure tours to cultural excursions, we offer a variety of
            services to make your trip unforgettable.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 xl:w-[1140px] 2xl:w-[1440px] pb-8 mx-4 md:mx-8 pt-0">
          {services.map((service, index) => (
            <CardTypeTwo
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
