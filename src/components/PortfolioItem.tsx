"use client";
import React from "react";

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline mt-4 block"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
