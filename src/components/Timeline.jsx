import React from "react";

const Timeline = ({ timeline }) => {
  return (
    <div className="container  mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 bg-white h-full border"
          style={{ left: "50%" }}
        ></div>
        {/* right timeline */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              {timeline.one.title}
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              {timeline.one.description}
            </p>
          </div>
        </div>

        {/* left timeline */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              {timeline.two.title}
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              {timeline.two.description}
            </p>
          </div>
        </div>

        {/* right timeline */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              {timeline.three.title}
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              {timeline.three.description}
            </p>
          </div>
        </div>

        {/* left timeline */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              {timeline.four.title}
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              {timeline.four.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
