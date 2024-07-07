import React from "react";

interface Props {
  // Define your component's props here
}

const CardTypeOne: React.FC<Props> = (props) => {
  // Implement your component's logic here

  return (
    // JSX code for your component's UI goes here
    <div>
      <div className="w-full h-full flex justify-center items-center text-center">
        <div className="">
          <div className="rounded-xl flex flex-col items-center justify-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4em"
              height="4em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#80BBFF"
                d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z"
              />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
            >
              <path
                fill="#80BBFF"
                d="M8.207.13a.74.74 0 0 1 .517.55l1.199 5.397l5.396 1.2a.741.741 0 0 1 .364 1.247l-7.159 7.159a.741.741 0 0 1-.685.2L1.982 14.58a.741.741 0 0 1-.563-.563L.118 8.16a.741.741 0 0 1 .2-.685L7.475.317A.741.741 0 0 1 8.207.13m.283 6.332l-.92-4.141l-5.917 5.915l.92 4.142zm-4.868 6.964l4.142.92l5.915-5.915l-4.141-.92z"
              />
            </svg>
            <h1 className="text-xl 2xl:text-2xl font-semibold text-gray-600 mt-4 mb-2">
              Schedule Meeting
            </h1>
            <h1 className="text-sm 2xl:text-lg font-base text-gray-800">
              Discussing product design work or partnerships
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTypeOne;
