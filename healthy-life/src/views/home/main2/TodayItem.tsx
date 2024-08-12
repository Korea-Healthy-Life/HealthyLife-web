import React, { useState } from 'react'
import '../../../style/home/main2.css'

interface todayItemSliderProps{
  images: string[]
}

const TodayItem: React.FC<todayItemSliderProps> =({images}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length -1 : prevIndex -1 ));
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex)=> (prevIndex === images.length -1 ? 0 : prevIndex + 1));
  }


  const visibleImages = images.slice(currentIndex, currentIndex + 3);
  if(visibleImages.length < 3){
    visibleImages.push(...images.slice(0, 3 -visibleImages.length));
  }
  return (
    <div className='todayItemSlider'>
      <div className='todayItemImagesContainer'>
        {visibleImages.map((image, index) => (
          <div key={index} className='todayItemImage'>
            <img src={image} alt={`slide ${index}`}/>
          </div>
        ))}
      </div>
        <div className='todayItemButtonContainer'>
        <button className='prevButton1' onClick={handlePrevClick}>&#10094;</button>
        <button className='nextButton1' onClick={handleNextClick}>&#10095;</button>
        </div>
      
    </div>
  )
}

export default TodayItem