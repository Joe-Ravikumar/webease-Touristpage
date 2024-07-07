import React from "react";

export default function FeaturesCard({ imageUrl, title, subtitle, content }) {
  return (
    <>
      {/* <!-- Component: Basic blog card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/* <!-- Image --> */}
        <figure>
          <img
            src={imageUrl} // Use the imageUrl prop for dynamic image source
            alt="card image"
            className="h-[200px] w-full object-cover object-center rounded-t-lg"
          />
        </figure>
        {/* <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              {title} {/* Use the title prop for dynamic title */}
            </h3>
            <p className="text-sm text-slate-400"> {subtitle} </p> {/* Use the date prop for dynamic date */}
          </header>
          <p className="text-justify">
            {content} {/* Use the content prop for dynamic content */}
          </p>
        </div>
      </div>
      {/* <!-- End Basic blog card --> */}
    </>
  );
}
