// Hero.js

import React from 'react';
import CarouselPage from './CarouselPage';
import './Hero.css';
import lady from "../assets/lady.png"

const Hero = ({ slides }) => {
  return (
    <div className='hero'>
      <CarouselPage slides={slides} />
      <img src={lady} className='lady' alt='lady-image1' />
    </div>
  );
};

export default Hero;
