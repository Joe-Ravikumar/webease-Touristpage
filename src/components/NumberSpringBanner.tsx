"use client";
import React from "react";
import NumberSpring from "@/components/NumberSpring";

const NumberSpringBanner: React.FC = () => {
  return (
    <div className="bg-indigo-600 text-white py-16 w-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <NumberSpring n={100} className="text-5xl font-bold" />
            <p className="text-lg mt-2">Adventure Tours</p>
          </div>
          <div>
            <NumberSpring n={200} className="text-5xl font-bold" />
            <p className="text-lg mt-2">Cultural Experiences</p>
          </div>
          <div>
            <NumberSpring n={300} className="text-5xl font-bold" />
            <p className="text-lg mt-2">Relaxation Retreats</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberSpringBanner;
