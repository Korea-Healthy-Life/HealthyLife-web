import React from 'react'

interface currentProduct{
  id: number;
  image: string
}


const productImages: currentProduct[] = [
    {id: 1, image: 'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg'},
    {id: 2, image: 'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg'},
    {id: 3, image: 'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg'}
    
] 

function CurrentProduct() {
  
  

  return (
    <div>
      <h3>최근본 상품</h3>
    <br />
    

    <div style={{float: 'left'}}>
      {productImages.map((productImage)=>(
        <div key={productImage.id}>
          {productImage.image}
          <button>장바구니</button>
          <button>삭제</button>
        </div>
      ))}    
    </div>
    
    </div>
  )
}

export default CurrentProduct