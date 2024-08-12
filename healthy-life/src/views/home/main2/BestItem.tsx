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
      setCurrentIndex((prevIndex) => (prevIndex === images.images.length -1 ? 0: prevIndex +1 ));
    }


    const visibleImages = images.images.slice(currentIndex, currentIndex + 3);
    if(visibleImages.length < 3) {
      visibleImages.push(...images.images.slice(0, 3 - visibleImages.length));
    }


  return (
    <div className='bestItemSlider'>

      <div className='bestItemImagesContainer'>
        {visibleImages.map((image, index) => (
          <div key={index} className='bestItemImage'>
            <img src={image} alt={`Slide ${index}`}  />
            <h4>product</h4>
            <p>price: 30000원</p>
          </div>
        ))}
      </div>
      <div className='bestItemButtonContainer1'>
        <button className='prevButton1' onClick={handlePrevClick}>&#10094;</button>
        <button className='nextButton1' onClick={handleNextClick}>&#10095;</button>
      </div>      
    </div>
  )
}
