import React from "react";

interface TwoLineTitleProps {
  main: string;
  des: string;
  mainSize?: string;
  mainColor?: string;
  dividerColor?: string;
  desColor?: string;
  fontFace?: string;
}

const TwoLineTitle: React.FC<TwoLineTitleProps> = (props) => {
  const {
    main = "Enter Your Title Here",
    des = "Enter Your Description Here",
    mainSize = "4xl",
    mainColor = "#80BBFF",
    dividerColor = "#80BBFF",
    desColor = "#737373",
    fontFace = "Poppins",
  } = props;

  return (
    <div
      className={`w-full flex flex-col py-[60px] items-center text-center px-[5%]`}
      // style={{ fontFamily: fontFace }}
    >
      <span
        className={`font-bold uppercase text-4xl`}
        style={{ color: mainColor, fontSize: mainSize }}
      >
        {main}
      </span>
      <div
        className={` w-[100px] h-[2px] m-2`}
        style={{ backgroundColor: dividerColor }}
      ></div>
      <span
        className={`text-lg pt-2 max-w-[1100px]`}
        style={{ color: desColor }}
      >
        {des}
      </span>
    </div>
  );
};

export default TwoLineTitle;
