import React from "react";

const TwoLineTitle: React.FC<{ main: string; des: string }> = ({
  main,
  des,
}) => {
  return (
    <div className="text-center my-8">
      <h2 className="text-3xl font-bold">{main}</h2>
      <p className="text-lg text-gray-600 mt-2">{des}</p>
    </div>
  );
};

export default TwoLineTitle;
