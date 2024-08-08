import React, { useEffect, useRef, useState } from 'react';
import '../../../style/home/MainBanner.css'
import { useFetcher } from 'react-router-dom';

interface MainBannerProps {
  images: string[];
}

const MainBanner: React.FC<MainBannerProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null); 

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 10000); 

    return () => clearInterval(interval);
  }, [images.length]);


  const visibleImages = images.slice(currentIndex, currentIndex + 1);
  if (visibleImages.length < 1) {
    visibleImages.push(...images.slice(0, 1 - visibleImages.length));
  }
  
  return (
      <div className='bannerImages'>
        {visibleImages.map((image, index) => (
          <div key={index} className='bannerDiv'>
            <img src={image} alt={`banner ${index}`} className="mainBannerImages"/>
          </div>
        ))}
      <div className='sliderBtnDiv'>
      <button className="prevClick" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className="nextClick" onClick={handleNextClick}>
        &#10095;
      </button>
      </div>
      </div>
  );
};

export default MainBanner;