import React from "react";

interface CardTypeTwoProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CardTypeTwo: React.FC<CardTypeTwoProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="card shadow-lg rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="card-image w-full h-48 object-cover"
      />
      <div className="card-content p-4">
        <h3 className="card-title text-xl font-bold mb-2">{title}</h3>
        <p className="card-description text-gray-700 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link text-blue-500 hover:text-blue-700 font-semibold"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default CardTypeTwo;
