"use client";
import PageHeader from "@/components/pageheaders/PageHeader";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import React, { useEffect } from "react";
import services from "@/uiControllers/worksData.json";
import CardTypeTwo from "@/components/cards/CardTypeTwo";
import NumberSpringBanner from "@/components/banner/NumberSpringBanner";
import { packages } from "@/services/actions/packages.services";
import useMutation from "@/hooks/useMutation";
import { useAppSelector } from "@/hooks/reduxHooks";
import toast from "react-hot-toast";

const Packages: React.FC = () => {
  const userID = useAppSelector((state) => state.auth.userIdForVerification);
  const { data, error, isLoading, mutate } = useMutation<any>(packages);

  const fetchData = async () => {
    await mutate({
      userID,
    });
  };

  useEffect(() => {
    if (data) {
      toast.success(data?.message);
    }
    if (error) {
      toast.error(error);
      console.error(error);
    }
  }, [data, error]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen ">
      <PageHeader
        title="Travel Packages"
        subtitle="Explore our exclusive travel packages tailored for every type of traveler"
        backgroundImage="/images/natural_wonder.jpg"
      />
      <div className="flex flex-col items-center py-8">
        <TwoLineTitle
          main="Adventure Tours"
          des="Embark on thrilling adventures with our specially curated tour packages designed for the adventurous at heart."
          className="text-center mb-8"
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 xl:w-[1140px] 2xl:w-[1440px] pb-8 mx-4 md:mx-8">
          {services
            .filter((card) => card.category === "Adventure")
            .map((card, index) => (
              <CardTypeTwo key={index} {...card} />
            ))}
        </div>
        <TwoLineTitle
          main="Cultural Experiences"
          des="Dive deep into the local culture with our exclusive packages that offer a unique glimpse into the traditions and customs of the area."
          className="text-center mt-16 mb-8"
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 xl:w-[1140px] 2xl:w-[1440px] pb-8 mx-4 md:mx-8 bg-transparent">
          {services
            .filter((card) => card.category === "Cultural")
            .map((card, index) => (
              <CardTypeTwo key={index} {...card} />
            ))}
        </div>
        <TwoLineTitle
          main="Relaxation Retreats"
          des="Unwind and rejuvenate with our luxurious relaxation retreats, featuring serene environments and top-notch amenities."
          className="text-center mt-16 mb-8"
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 xl:w-[1140px] 2xl:w-[1440px] pb-8 mx-4 md:mx-8">
          {services
            .filter((card) => card.category === "Relaxation")
            .map((card, index) => (
              <CardTypeTwo key={index} {...card} />
            ))}
        </div>
      </div>
      <div>
        <NumberSpringBanner />
      </div>
    </div>
  );
};

export default Packages;
