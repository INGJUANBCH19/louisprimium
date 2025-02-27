import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ name, description, image }) => {
  return (
    <div className="service-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;