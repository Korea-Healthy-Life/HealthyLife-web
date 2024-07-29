import { useState } from 'react';
import '../../../style/home/Checkin.css';
import { ProductProps } from './AllCheckinApp';


const Checkin:React.FC<{ products: ProductProps[]}> = ({products})  => {

  return (
      <div className="checkinImageList">
      {products.map(product => (
        <div key={product.id}>
        <li className='checkinHoverButton'>
          <button>ADD</button>
          <button>WISH</button>
        </li>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          </div>
      ))}
      </div>
  )
}
export default Checkin;