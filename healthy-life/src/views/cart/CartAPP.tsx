import React from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import '../../style/cart.css'

// interface CartProps {
//   id: number;
//   title: string;
//   option: string;
//   price: number;
// }

const CartAPP = () => {
  // const [product, setProduct] = useState()
  return (
    <div className='totalCart'>
      <h3>장바구니</h3>
      <div className='cartContainer'> 
        <div className='cartButton'>
          <button>모두선택</button>
          <button>모두해제</button>
        </div>
          <ul>
            <li>
              <input type="checkbox" className='cartCheckbox'/>
              <img src="https://cdn.pixabay.com/photo/2024/04/08/16/11/ai-generated-8683863_1280.jpg" alt="" />
              <h4>상품이름</h4>
              <p>상품옵션</p>
              <input type="number" min={1} className='productAmount'/>
              <p>금액</p>
              <span className='deleteBtn'><HighlightOffIcon /></span>
            </li>
          </ul>

          <div className='totalContainer'>
            <ul>
              <li>전체 상품 금액: </li>
              <li>배송비: </li>
              <li>전체 비용: </li>
            </ul>
          </div>
          <div className='processBtn'>
            <button>계속쇼핑하기</button>
            <button>결제하기</button>
          </div>
      </div>
    </div>
  )
}

export default CartAPP