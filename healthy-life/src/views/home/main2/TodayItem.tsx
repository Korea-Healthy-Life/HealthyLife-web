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


  const visibleImages = images.slice(currentIndex, currentIndex + 4);
  if(visibleImages.length < 4){
    visibleImages.push(...images.slice(0, 4 -visibleImages.length));
  }
  return (
    <div className='todayItemSlider'>
        <button className='prevButton' onClick={handlePrevClick}>&#10094;</button>
      <div className='todayItemImagesContainer'>
        {visibleImages.map((image, index) => (
          <div key={index} className='todayItemImage'>
            <img src={image} alt={`slide ${index}`}/>
          </div>
        ))}
      </div>

        <div>
        <button className='nextButton' onClick={handleNextClick}>&#10095;</button>
        </div>
      
    </div>
  )
}

export default TodayItem