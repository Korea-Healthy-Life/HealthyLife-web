import React, { useState } from 'react'

interface productImages{
  images: string[]
}


const Product: React.FC<productImages> = ({images}) => {

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
    <div>
      <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
        
        <div className='productImage'>
          <img src='https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg' alt="상세페이지 상품 이미지" />
        </div>


        <div className='productData'>
          <p>상품명</p>        

        <div>
          <p>상품금액: 000</p>
          <p>배송기간: </p>
        </div>
        
        <select name="productOption" id="option">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        
        <div className='button'>
          <button>장바구니</button>
          <button>WISH</button>
          <button>주문</button>
        </div>

        </div>

      </div>




      <div className='relatedItem'>
      <button className='prevButton' onClick={handlePrevClick}>&#10094;</button>
      <div className='relatedItemImagesContainer'>
        {visibleImages.map((image, index) => (
          <div key={index} className='relatedItemImage'>
            <img src={image} alt={`slide ${index}`}/>
          </div>
        ))}
      </div>
        
      <button className='nextButton' onClick={handleNextClick}>&#10095;</button>
      </div>


    </div>
  )
}

export default Product