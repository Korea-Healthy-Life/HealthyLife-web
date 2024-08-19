import React from 'react'
import { Link, Route, Routes} from 'react-router-dom';

import '../../../style/mypage/MypageNav.css'
import MypageMain from './MypageMain';
import OrderApp from '../order/OrderApp';
import ReviewApp from '../review/ReviewApp';
import WishApp from '../wish/WishApp';
import CurrentProduct from '../currentProducts/CurrentProduct';
import Reserves from '../cupon,reserves,benefit/Reserves';
import Cupon from '../cupon,reserves,benefit/Cupon';
import Benefit from '../cupon,reserves,benefit/Benefit';
import Userinformation from '../userInformation/Userinformation';
import ReviewWrite from '../review/ReviewWrite';



const MypageNav:React.FC = () => {
  
  return (
    <div className='mypagNavContainer'>
      <div className='myPageNavBox'>
        <ul>
        <li><Link to='/mypage/userinformation'>내 정보</Link></li> 
        <li><Link to='/mypage/orderApp'>주문처리 현황</Link></li> 
        <li><Link to='/mypage/myreview'>후기</Link></li> 
        <li><Link to='/mypage/wishlist'>위시리스트</Link></li> 
        <li><Link to='/mypage/current'>최근 상품목록</Link></li> 
        <li><Link to='/mypage/mileage'>적립금 내역</Link></li> 
        <li><Link to='/mypage/membership'>등급별 혜택</Link></li> 
        </ul>
      </div>
    </div>
  )
}
export default MypageNav;