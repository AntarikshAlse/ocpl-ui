import React from "react";
import TechCard from "../components/TechCard";
//images
import ai from "../assets/images/ai.png";
import blockchain from "../assets/images/blockchain.jpg";
import cloud from "../assets/images/cloud-computing.jpg";
import kubernetes from "../assets/images/kubernetes.png";
import web from "../assets/images/webDev.jpg";
import mobile from "../assets/images/app-development.jpg";
const Introduction = () => {
  let services = [
    { title: "Blockchain Development", srcImg: blockchain },
    { title: "Cloud Computing", srcImg: cloud },
    { title: "AI", srcImg: ai },
    { title: "Kubernetes", srcImg: kubernetes },
    { title: "Web Development", srcImg: web },
    { title: "Mobile Development", srcImg: mobile },
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
            <TechCard title={service.title} srcImg={service.srcImg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
