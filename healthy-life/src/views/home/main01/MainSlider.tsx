import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 4);
  if (visibleImages.length < 4) {
    visibleImages.push(...images.slice(0, 4 - visibleImages.length));
  }

  return (
    <div className='slider'>
        <button className="prev" onClick={handlePrevClick}>&#10094;</button>
        
      <div className='sliderImagesContainer'>
        {visibleImages.map((image, index) => (
          <div key={index} className='sliderImage'>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div>
        <button className="next" onClick={handleNextClick}>&#10095;</button>
      </div>
    </div>
  );
};

export default ImageSlider;