"use client";
import React from "react";
import PageHeader from "@/components/pageheaders/PageHeader";
import destinations from "@/uiControllers/destinationsData.json";
import { motion } from "framer-motion";

const Destinations: React.FC = () => {
  return (
    <div className="mb-10">
      <PageHeader title="Explore Destinations" />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center m-5">
          Explore Our Destinations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="rounded-lg w-full h-40 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-40 text-white">
                <p className="text-sm text-white font-medium">{destination.name}</p>
                <p className="text-xs text-slate-200">{destination.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
