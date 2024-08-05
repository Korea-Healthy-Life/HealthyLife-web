import { ProductProps } from './AllReview';

import '../../style/home/allProduct.css'


const AllProductList:React.FC<{ products: ProductProps []}> = ({products})  => {

  return (
    <div className='allProductImage'>
      <div className="allProductImageList">
      {products.map(product => (
        <div className='reviewBox' key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          </div>
      ))}
      </div>
    </div>
  )
}
export default AllProductList;