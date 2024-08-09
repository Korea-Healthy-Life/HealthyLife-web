import { ProductProps } from './RecommandApp';

import '../../style/recommandList.css'


const RecommandList:React.FC<{ products: ProductProps[]}> = ({products})  => {

  return (
    <div className='allProductImage'>
      <div className="allProductImageList">
      {products.map(product => (
        <div key={product.id} className='recommandcontain'>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          </div>
      ))}
      </div>
    </div>
  )
}
export default RecommandList;