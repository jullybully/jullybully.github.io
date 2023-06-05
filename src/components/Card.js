import React from 'react';
import './Card.css';

const Card = ({ imageSrc, projectDescription, buttonLink }) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__image">
          <img src={imageSrc} alt="Project" />
        </div>
        <div className="card__description">
          <p>{projectDescription}</p>
          <a href={buttonLink}>View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
