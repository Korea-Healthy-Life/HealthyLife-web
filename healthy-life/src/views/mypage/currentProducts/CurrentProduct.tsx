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
    <aside style={{float: 'left'}}>
    <a href="#">내 정보</a>
    <a href="#">나의 주문처리 현황</a>
    <a href="#">내가 작성한 후기</a>
    <a href="#">위시리스트</a>
    <a href="#">최근 본 상품 목록</a>
    </aside>

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