import { useState } from 'react';
import '../../../style/home/Checkin.css';
import { ProductProps } from './AllCheckinApp';


const Checkin:React.FC<{ products: ProductProps[]}> = ({products})  => {

  return (
      <div className="checkinImageList">
      {products.map(product => (
        <div key={product.id}>
        <div className='checkinHoverButton'>
          <button>ADD</button>
          <button>WISH</button>
        </div>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          </div>
      ))}
      </div>
  )
}
export default Checkin;