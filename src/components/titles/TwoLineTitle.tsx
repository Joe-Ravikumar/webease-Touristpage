// TwoLineTitle.tsx
import React from "react";
import classNames from "classnames";

interface TwoLineTitleProps {
  main: string;
  des: string;
  className?: string; // Add this line
}

const TwoLineTitle: React.FC<TwoLineTitleProps> = ({
  main,
  des,
  className,
}) => {
  return (
    <div className={classNames("text-center", className)}>
      <h2 className="text-2xl font-bold">{main}</h2>
      <p className="text-gray-600">{des}</p>
    </div>
  );
};

export default TwoLineTitle;
