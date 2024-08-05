import React, { useEffect, useState } from 'react';
import '../../../style/home/MainBanner.css'

interface MainBannerProps {
  images: string[];
}

const MainBanner: React.FC<MainBannerProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className='bannerContainer'>
      {/* <button className="prevClick" onClick={handlePrevClick}>
        &#10094;
      </button> */}
      <div className='bannerImages'>
        {visibleImages.map((image, index) => (
          <div key={index} className='bannerDiv'>
            <img src={image} alt={`banner ${index}`} className="images"/>
          </div>
        ))}
      </div>
      <div>
      {/* <button className="nextClick" onClick={handleNextClick}>
        &#10095;
      </button> */}
      </div>
    </div>
  );
};

export default MainBanner;