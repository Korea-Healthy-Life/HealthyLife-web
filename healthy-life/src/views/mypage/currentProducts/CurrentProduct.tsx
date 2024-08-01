import React from 'react'

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
    <div>
      <h2 style={{textAlign: 'center'}}>최근본 상품</h2>
    <br />
    

    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '43%'}}>
      {productImages.map((productImage)=>(
        productImage.id <= 3 ? 
        <div key={productImage.id}>
          <img src={`${productImage.image}`} alt="이미지" width={'25%'} height={'25%'} />
          <button>장바구니</button>
          <button>삭제</button>
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