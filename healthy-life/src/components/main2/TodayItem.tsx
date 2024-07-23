import React, { useState } from 'react'

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


  const visibleImages = images.slice(currentIndex, currentIndex + 5);
  if(visibleImages.length < 5){
    visibleImages.push(...images.slice(0, 5 -visibleImages.length));
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{display: 'flex', overflow: 'hidden', width: '80%'}}>
        {visibleImages.map((image, index) => (
          <div key={index} style={{flex: '0 0 20%'}}>
            <img src={image} alt={`slide ${index}`} style={{width: '100%', height: 'auto'}}/>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevClick}>이전</button>
        <button onClick={handleNextClick}>다음</button>
      </div>
    </div>
  )
}

export default TodayItem