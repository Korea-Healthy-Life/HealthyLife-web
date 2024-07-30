import React from 'react'
import '../../../style/mypage/WishApp.css'

function WishApp() {
  return (
    <div className='whishListContainer'>
      <h4>위시리스트</h4>
      <ul className='wishList'>
        <li>
          <img src="https://cdn.pixabay.com/photo/2022/07/25/20/15/grilled-chicken-7344499_1280.jpg" alt="" width={100}/>
            <div><p>금액:</p></div>
          <div className='wishListBtn'>
            <button>장바구니</button>
            <button>삭제</button>
          </div>
        </li>
        <li>
          <img src="https://cdn.pixabay.com/photo/2022/07/25/20/15/grilled-chicken-7344499_1280.jpg" alt="" width={100}/>
          <div className='wishListBtn'>
            <button>장바구니</button>
            <button>삭제</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default WishApp