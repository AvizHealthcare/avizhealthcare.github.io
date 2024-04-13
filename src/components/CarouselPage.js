// CarouselPage.js

import React, { useState, useEffect } from 'react';
import './CarouselPage.css';

const CarouselPage = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transformValue, setTransformValue] = useState('translateX(0)');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      const nextTransformValue = `translateX(${-nextIndex * 100}%)`;
      setCurrentIndex(nextIndex);
      setTransformValue(nextTransformValue);
    }, interval);

    return () => clearInterval(intervalId);
  }, [slides, interval, currentIndex]);

  const handleNextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    const nextTransformValue = `translateX(${-nextIndex * 100}%)`;
    setCurrentIndex(nextIndex);
    setTransformValue(nextTransformValue);
  };

  const handlePrevSlide = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const prevTransformValue = `translateX(${-prevIndex * 100}%)`;
    setCurrentIndex(prevIndex);
    setTransformValue(prevTransformValue);
  };

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: transformValue }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
          >
            <h2>{slide.heading}</h2>
            <p>{slide.paragraph}</p>
            <div className="dots">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                />
              ))}
            </div>
            <div className="buttons">
              <button onClick={handleNextSlide}>{slide.button1}</button>
              <button onClick={handlePrevSlide}>{slide.button2}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselPage;
