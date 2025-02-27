import React from 'react';
import './Banner.css';

const Banner = ({ image, altText }) => {
  return (
    <div className="banner">
      <img src={image} alt={altText} />
    </div>
  );
};

export default Banner;