import React from "react";

const InfoSectionTypeOne: React.FC = () => {
  return (
    <div className="info-section p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
      <p className="text-gray-700 mb-4">
        We started as a small group of travel enthusiasts with a passion for
        exploring new places. Over the years, we've grown into a dedicated team
        committed to providing the best travel experiences. Join us as we guide
        you through the most beautiful and captivating destinations.
      </p>
      <p className="text-gray-700">
        Whether you're looking for adventure, relaxation, or cultural immersion,
        we have something for everyone. Our guides are experts in their fields,
        ready to show you the hidden gems and must-see attractions of our
        destinations.
      </p>
    </div>
  );
};

export default InfoSectionTypeOne;
