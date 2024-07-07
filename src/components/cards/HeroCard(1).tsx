import React from "react";
import CardTypeOne from "./CardTypeOne";

type Props = {
  // Define the props for your component here
};

const HeroCard: React.FC<Props> = (props) => {
  // Implement your component logic here

  return (
    // JSX code for your component's UI goes here
    <div className="mt-[-40px] w-full flex justify-center mb-8">
      <div className="mx-8 w-full xl:w-[1140px] 2xl:w-[1340px] grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-4 bg-white rounded-xl shadow-md shadow-slate-200 hover:shadow-slate-300 hover:shadow-md z-10 py-12 px-8">
        <CardTypeOne />
        <CardTypeOne />
        <CardTypeOne />
        <CardTypeOne />
      </div>
    </div>
  );
};

export default HeroCard;
