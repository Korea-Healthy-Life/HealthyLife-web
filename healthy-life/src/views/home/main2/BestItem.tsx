import React, { useState } from 'react'
import '../../../style/home/main2.css'

interface bestItemSliderProps {
  images: string[];
}


export default function BestItem(images: bestItemSliderProps )  {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.images.length -1 : prevIndex -1) );
    }


    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.images.length -1 ? 0: prevIndex +1));
    }


    const visibleImages = images.images.slice(currentIndex, currentIndex + 4);
    if(visibleImages.length < 4) {
      visibleImages.push(...images.images.slice(0, 4 - visibleImages.length));
    }


  return (
    <div className='bestItemSlider'>
      <button className='prevButton' onClick={handlePrevClick}>&#10094;</button>

      <div className='bestItemImagesContainer'>
        {visibleImages.map((image, index) => (
          <div key={index} className='bestItemImage'>
            <img src={image} alt={`Slide ${index}`}  />
          </div>
        ))}
      </div>
      
        <button className='nextButton' onClick={handleNextClick}>&#10095;</button>
      
    </div>
  )
}
