import React from "react";
import foundation from "../assets/images/ocplfoundation.png";
import finance from "../assets/images/ocplfinance.png";
import health from "../assets/images/ocplhealth.png";
import crm from "../assets/images/ocplcrm.png";
import alpha from "../assets/images/crm-alpha.png";
import real from "../assets/images/ocplreal.png";
import ProjectCard from "../components/ProjectCard";
const Projects = () => {
  const projects = [
    {
      src: foundation,
      title: "OCPL Foundation",
      desc: "OCPL Foundation leverages blockchain technology to tackle common issues in charitable giving. Experience a new era of trust and accountability in philanthropy with the OCPL Foundation - fostering positive change through transparent and secure charitable contributions.",
      link: "https://demo1.ocpl.tech",
    },
    {
      src: finance,
      title: "OCPL Finance",
      desc: "OCPL Finance, a blockchain-based solution, revolutionizes financial institutions' operations. Offering a secure, decentralized platform for seamless transactions, asset management, and cost reduction, OCPL Finance ensures data integrity and compliance.",
      link: "https://demo3.ocpl.tech",
    },
    {
      src: health,
      title: "OCPL Health",
      desc: "Introducing OCPL Healthcare, an innovative blockchain-based solution transforming the healthcare industry. This cutting-edge platform enhances data security, streamlines patient records management, and ensures seamless data sharing among healthcare providers",
      link: "https://demo2.ocpl.tech",
    },
    {
      src: crm,
      title: "OCPL CRM Omega",
      desc: "Experience the power of CRM Omega, a versatile platform for seamless contact management, sales automation, and robust reporting. Enhance team collaboration, automate workflows, and drive customer loyalty with tailored communication strategies.",
      link: "https://demo4.ocpl.tech",
    },
    {
      src: alpha,
      title: "OCPL CRM Alpha",
      desc: "Boost your customer relations with CRM Alpha, an intuitive, feature-rich solution that streamlines lead management, sales tracking, and customer support. Leverage AI-driven analytics for data-driven insights, personalized marketing campaigns, and improved customer satisfaction.",
      link: "https://demo7.ocpl.tech",
    },
    {
      src: real,
      title: "OCPL Real Estate",
      desc: "Discover OCPL RealEstate, a pioneering solution that integrates blockchain technology into the real estate industry. OCPL RealEstate revolutionizes traditional processes, reduces transaction costs, and streamlines due diligence, fostering a seamless and trustworthy real estate ecosystem",
      link: "https://demo5.ocpl.tech",
    },
  ];
  return (
    <div className="flex flex-col">
      <h1 className=" text-2xl my-4 text-center">
        OUR <span className="font-bold">WORK</span>
      </h1>
      <div className="flex justify-evenly flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            desc={project.desc}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
