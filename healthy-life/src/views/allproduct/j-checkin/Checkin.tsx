import { useState } from 'react';
import '../../../style/home/Checkin.css';
import { ProductProps } from './AllCheckinApp';


const Checkin:React.FC<{ products: ProductProps[]}> = ({products})  => {

  return (
    <div className='checkinImage'>
      <div className="checkinImageList">
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
          </div>
      ))}
      </div>
    </div>
  )
}
export default Checkin;