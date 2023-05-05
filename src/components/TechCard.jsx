import React from "react";

const TechCard = ({ srcImg, title }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={srcImg} alt="Technology Type Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export default TechCard;
