import '../../../style/home/allProduct.css'
import { ProductProps } from './AllCheckinApp';


const Checkin:React.FC<{ products: ProductProps[]}> = ({products})  => {

  return (
      <div className="allProductImageContainer">
      {products.map(product => (
        <div key={product.id} className='allProductContain'>
          <img src={product.image} alt={product.title}  className='allProductImage'/>
          <h4>{product.title}</h4>
        <div className='allProductHoverButton'>
          <button>ADD</button>
          <button>WISH</button>
        </div>
          </div>
      ))}
      </div>
  )
}
export default Checkin;