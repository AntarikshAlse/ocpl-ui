import React from "react";
import TechCard from "../components/TechCard";

const Introduction = () => {
  let services = [
    "Blockchain Development",
    "Web Development",
    "Mobile Development",
    "Cloud Computing",
    "No Code Development",
    "Internet of Things IOT",
    "Edge Computing",
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-lg">
        Ocpl Tech is a leading Blockchain Development Company that creates
        custom blockchain solutions and high-speed web, Android, and iOS
        applications. Partnering with Ocpl Tech simplifies processes and
        accelerates business growth.
      </p>
      <div className="flex flex-wrap ">
        {services.map((service, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <TechCard title={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
