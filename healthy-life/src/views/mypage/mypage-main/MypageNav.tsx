import React from 'react'
import { Link, Route, Routes} from 'react-router-dom';

import '../../../style/mypage/MypageNav.css'
import WishApp from '../wish/WishApp';
import ReviewApp from '../review/ReviewApp';
import OrderApp from '../order/OrderApp';
import MyPage from '../MyPage';

const MypageNav:React.FC = () => {

  return (
    <div>
      <div className='myPageNavBox'>
        <ul>
        <li><Link to='/mypage/userinformation'>내 정보(회원정보수정)</Link></li> 
        <li><Link to='/mypage/order'>주문처리 현황</Link></li> 
        <li><Link to='/mypage/review'>후기</Link></li> 
        <li><Link to='/mypage/wishlist'>위시리스트</Link></li> 
        <li><Link to='/mypage/current'>최근 상품목록</Link></li> 
        <li><Link to='/mypage/coupon'>쿠폰 내역</Link></li> 
        <li><Link to='/mypage/mileage'>적립금 내역</Link></li> 
        <li><Link to='/mypage/membership'>등급별 혜택안내</Link></li> 
        </ul>
      </div>

      <div >
      </div>
    </div>
  )
}
export default MypageNav;