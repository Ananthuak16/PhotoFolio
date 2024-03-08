import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const closeCarousel = () => {
    // Implement close carousel logic
  };

  return (
    <div>
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentImageIndex].url} alt={images[currentImageIndex].title} />
      <button onClick={nextImage}>Next</button>
      <button onClick={closeCarousel}>Close</button>
    </div>
  );
};

export default Carousel;
