import React from "react";

const ProjectCard = ({ src, title, desc, link }) => {
  return (
    <div className="card mb-5 hover:scale-105 hover:ease-in-out overflow-hidden max-w-sm bg-base-100 shadow-xl">
      <figure>
        <img src={src} alt="Shoes" />
      </figure>
      <a href={link}>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
