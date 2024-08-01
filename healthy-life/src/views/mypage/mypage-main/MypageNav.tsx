import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

import '../../../style/mypage/MypageNav.css'
;
import MypageMain from './MypageMain';
import OrderApp from '../order/OrderApp';
import ReviewApp from '../review/ReviewApp';
import WishApp from '../wish/WishApp';
import Userinformation from '../userInformation/Userinformation';
import Benefit from '../cupon,reserves,benefit/Benefit';
import Reserves from '../cupon,reserves,benefit/Reserves';
import CurrentProduct from '../currentProducts/CurrentProduct';
import MyPage from '../MyPage';

const MypageNav:React.FC = () => {
  
  return (
    <div>
      <div className='myPageNavBox'>
        <ul>
        <li><Link to='/mypage/userinformation'>내 정보</Link></li> 
        <li><Link to='/mypage/order'>주문처리 현황</Link></li> 
        <li><Link to='/mypage/review/*'>후기</Link></li> 
        <li><Link to='/mypage/wishlist'>위시리스트</Link></li> 
        <li><Link to='/mypage/current'>최근 상품목록</Link></li> 
        <li><Link to='/mypage/mileage'>적립금 내역</Link></li> 
        <li><Link to='/mypage/membership'>등급별 혜택</Link></li> 
        </ul>
      </div>
      <div>

      </div>
    </div>
  )
}
export default MypageNav;