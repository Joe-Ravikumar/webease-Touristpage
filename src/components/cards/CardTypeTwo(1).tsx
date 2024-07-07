import React from "react";

interface CardTypeTwoProps {
  title: string;
  author: string;
  date: string;
  content: string;
  imageUrl: string;
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
  btnTextColor?: string;
  contentTextColor?: string;
}

const CardTypeTwo: React.FC<CardTypeTwoProps> = ({
  title,
  author,
  date,
  content,
  imageUrl,
  backgroundColor = "white",
  textColor = "#737373",
  contentTextColor = "#282828",
  buttonColor = "#0052D4",
  btnTextColor = "white",
}) => {
  return (
    <>
      <a href="">
        <div
          style={{ backgroundColor: backgroundColor }}
          className="overflow-hidden rounded-xl shadow-md shadow-slate-200 hover:shadow-slate-300 hover:shadow-md"
        >
          <figure className="p-2">
            <img
              src={imageUrl}
              alt="card image"
              className="h-[180px] w-full object-cover object-center rounded-t-lg hover:scale-105 duration-300"
            />
          </figure>
          <div className="py-6 px-4">
            <header className="mb-4 flex gap-4">
              <div>
                <h3
                  className="text-xl 2xl:text-2xl font-medium"
                  style={{ color: textColor }}
                >
                  {title}
                </h3>
                <p className="text-sm 2xl:text-base" style={{ color: textColor }}>
                  {author}
                </p>
              </div>
            </header>
            <p className="text-sm 2xl:text-base text-justify" style={{ color: contentTextColor }}>
              {content}
            </p>
          </div>
          {/* <div className="w-full flex justify-center gap-2 p-4 pt-0">
        <button
          style={{ backgroundColor: buttonColor }}
          className="w-full inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-white hover:text-black focus:bg-white focus:text-black focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none disabled:hover:bg-transparent"
        >
          <span style={{ color: btnTextColor }}>Read more</span>
        </button>
      </div> */}
        </div>
      </a>
    </>
  );
};

export default CardTypeTwo;
