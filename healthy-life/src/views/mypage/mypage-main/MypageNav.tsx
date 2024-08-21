import React from 'react'
import { Link } from 'react-router-dom';

import '../../../style/mypage/MypageNav.css'


  

const MypageNav:React.FC = () => {
  
  return (
    <div className='mypagNavContainer'>
      <div className='myPageNavDiv'>
        <ul className='myPageNavBox'>
        <li className='mypageNavTitle'>주문관리</li>
        <li><Link to='/mypage/orderApp'>주문처리 현황</Link></li> 
        <li className='mypageNavLine'></li>
        <li className='mypageNavTitle'>활동관리</li>
        <li><Link to='/mypage/myreview'>후기</Link></li> 
        <li><Link to='/mypage/wishlist'>위시리스트</Link></li> 
        <li><Link to='/mypage/current'>최근 상품목록</Link></li> 
        <li className='mypageNavLine'></li>
        <li className='mypageNavTitle'>혜택관리</li>
        <li><Link to='/mypage/mileage'>적립금 내역</Link></li> 
        <li><Link to='/mypage/membership'>등급별 혜택</Link></li> 
        <li className='mypageNavLine'></li>
        <li className='mypageNavTitle'>회원정보관리</li>
        <li><Link to='/mypage/userinformation'>내 정보</Link></li> 
        </ul>
      </div>
    </div>
  )
}
export default MypageNav;