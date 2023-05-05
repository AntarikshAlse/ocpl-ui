import React from "react";
import TechCard from "../components/TechCard";

const Introduction = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-lg">
        Ocpl Tech is a leading Blockchain Development Company that creates
        custom blockchain solutions and high-speed web, Android, and iOS
        applications. Partnering with Ocpl Tech simplifies processes and
        accelerates business growth.
      </p>
      <div className="flex flex-wrap w-80">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          {/* <img className="w-full" src="" alt="image" /> */}
          <TechCard
            imgSrc="https://res.cloudinary.com/ocpl-tech/image/upload/"
            title="Blockchain Development"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4"></div>
      </div>
    </div>
  );
};

export default Introduction;
