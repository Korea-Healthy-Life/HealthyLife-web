import React from 'react'
import ProductApp from './product/ProductApp'
import Review from './review/Review'
import QNA from './qna/QNA'

function ProductPage() {
  return (
    <div>
      <ProductApp />
      <Review />
      <QNA/>
    </div>
  )
}

export default ProductPage