import React, { useState } from 'react'
import '../../../style/home/main2.css'

interface bannerImage{
  bannerImages: string[]
}



const Banner: React.FC<bannerImage> = ({bannerImages})=> {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? bannerImages.length -1 : prevIndex -1));
  }


  const visibleImages = bannerImages.slice(currentIndex, currentIndex +1);
  if(visibleImages.length < 1){
    visibleImages.push(...bannerImages.slice(0, 1 -visibleImages.length))
  }
  
  
  return (
    <div className='bannerSlider'>


      <button className='prevButton' onClick={handlePrevClick}>&#10094;</button>
      {visibleImages.map((image, index) => (
      <img className='bannerImagesljw' key={index} src={image} alt={`slide ${index}`} />
      
      ))}

  

    </div>
  )
}

export default Banner