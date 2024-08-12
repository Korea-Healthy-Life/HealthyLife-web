import React from 'react'
import '../../../style/currentProduct/currentProduct.css'

interface currentProduct{
  id: number;
  image: string[]
}


const productImages: currentProduct[] = [
    {id: 1, image: ['https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg']},
    {id: 2, image: ['https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg']},
    {id: 3, image: ['https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg']},
    {id: 4, image: ['https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg']},
    {id: 5, image: ['https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg']},
    {id: 6, image: ['https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg']},
    {id: 7, image: ['https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg']},
    {id: 8, image: ['https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg']},
    
] 

function CurrentProduct() {
  
  

  return (
    <div className='currentProductContainer'>
      <br />
      <br />
      <h2 style={{textAlign: 'center'}}>최근본 상품</h2>
    <br />
    

    <div className='imagesFlexBox'>
      {productImages.map((productImage)=>(
        productImage.id <= 3 ? 
        <div className='imageBox' key={productImage.id}>
          <img src={`${productImage.image}`} alt="이미지"  />
          <div className='buttonFlexBox'>
          <p>금액: </p>
          <div className='buttonBox'>
          <button>장바구니</button>
          <button>삭제</button>
          </div>

          </div>
          <hr />
        </div> : ''
      ))} 
      
    </div>
    
    </div>
  )
  // <div key={productImage.id}>
  //   {productImage.image}
  //   <button>장바구니</button>
  //   <button>삭제</button>
  // </div>
}

export default CurrentProduct