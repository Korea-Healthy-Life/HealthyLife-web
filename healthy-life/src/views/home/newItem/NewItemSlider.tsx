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

  const visibleImages = images.slice(currentIndex, currentIndex + 3);
  if (visibleImages.length < 3) {
    visibleImages.push(...images.slice(0, 3 - visibleImages.length));
  }

  return (
    <div className='slider'>
        
      <div className='sliderImagesContainer'>
        {visibleImages.map((image, index) => (
          <div key={index} className='sliderImage'>
            <img src={image} alt={`Slide ${index}`} />
            <h4>product</h4>
            <p>price: 30,000원</p>
          </div>
        ))}
      </div>
      <div className='btnconatainer'>
        <button className="prev" onClick={handlePrevClick}>&#10094;</button>
        <button className="next" onClick={handleNextClick}>&#10095;</button>
      </div>
    </div>
  );
};

export default ImageSlider;