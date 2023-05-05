import React from "react";

const TechCard = ({ srcImg, title }) => {
  return (
    <div className="card w-80 h-[14rem]  shadow-xl image-full  hover:bg-white hover:text-yellow-400 hover:scale-105 ">
      <figure>
        <img src={srcImg} alt="Technology Type Image" />
      </figure>
      <div className=" flex card-body justify-center items-center">
        <h2 className="card-title text-lime-300 text-lg">{title}</h2>
      </div>
    </div>
  );
};

export default TechCard;
