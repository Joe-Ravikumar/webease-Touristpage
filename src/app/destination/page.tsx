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
            <a
              key={index}
              href={
                destination.name === "Paris"
                  ? "https://en.wikipedia.org/wiki/Paris"
                  : destination.name === "Tokyo"
                  ? "https://en.wikipedia.org/wiki/Tokyo"
                  : destination.name === "New York City"
                  ? "https://en.wikipedia.org/wiki/New_York_City"
                  : destination.name === "London"
                  ? "https://en.wikipedia.org/wiki/London"
                  : destination.name === "Rome"
                  ? "https://en.wikipedia.org/wiki/Rome"
                  : destination.name === "Sydney"
                  ? "https://en.wikipedia.org/wiki/Sydney"
                  : destination.name === "Cape Town"
                  ? "https://en.wikipedia.org/wiki/Cape_Town"
                  : destination.name === "Rio de Janeiro"
                  ? "https://en.wikipedia.org/wiki/Rio_de_Janeiro"
                  : destination.name === "Bali"
                  ? "https://en.wikipedia.org/wiki/Bali"
                  : destination.name === "Dubai"
                  ? "https://en.wikipedia.org/wiki/Dubai"
                  : destination.name === "Kyoto"
                  ? "https://en.wikipedia.org/wiki/Kyoto"
                  : destination.name === "Venice"
                  ? "https://en.wikipedia.org/wiki/Venice"
                  : destination.name === "Santorini"
                  ? "https://en.wikipedia.org/wiki/Santorini"
                  : destination.name === "Amsterdam"
                  ? "https://en.wikipedia.org/wiki/Amsterdam"
                  : destination.name === "Barcelona"
                  ? "https://en.wikipedia.org/wiki/Barcelona"
                  : destination.name === "Hong Kong"
                  ? "https://en.wikipedia.org/wiki/Hong_Kong"
                  : destination.name === "Machu Picchu"
                  ? "https://en.wikipedia.org/wiki/Machu_Picchu"
                  : destination.name === "Istanbul"
                  ? "https://en.wikipedia.org/wiki/Istanbul"
                  : destination.name === "Prague"
                  ? "https://en.wikipedia.org/wiki/Prague"
                  : destination.name === "Vienna"
                  ? "https://en.wikipedia.org/wiki/Vienna"
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
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
                  <p className="text-sm text-white font-medium">
                    {destination.name}
                  </p>
                  <p className="text-xs text-slate-200">
                    {destination.description}
                  </p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
