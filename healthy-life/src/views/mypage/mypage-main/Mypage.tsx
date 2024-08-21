import React, { useState } from 'react'
import '../../../style/mypage/MypageMain.css'
import PercentSharpIcon from '@mui/icons-material/PercentSharp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';




function Mypage() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [productPerpage] = useState<number>(16)

  return (
    <div>
    <div className='myPageConatiner'>
    <div className='mypageAllContainer'>
      <div className='mypageMainContainer'>
        <h2>마이 쇼핑</h2>
        <ul>
          <li><AccountCircleIcon /><br />회원이름</li>
          <li><MilitaryTechIcon /><br />회원등급</li>
          <li><CardMembershipIcon /><br />멤버십</li>
          <li><MonetizationOnIcon /><br /><span>0원</span><br />적립금</li>
          <li><PercentSharpIcon /><br /><span>0개</span><br />쿠폰 </li>
          <li><LocalShippingIcon /><br /><span>0개</span><br />주문</li>
        </ul>
      </div>

      <div className='mypageSuvContainer'>
        <h4>나의 주문처리현황</h4>
        <ul>
          <li>0 <br /> 결제</li>
          <li>&#62;</li>
          <li>0 <br /> 배송준비중
          </li>
          <li>&#62;</li>
          <li>0 <br /> 배송중</li>
          <li>&#62;</li>
          <li>0 <br /> 배송완료
          </li>
        </ul>
      </div>
    </div>
    <div className='orderListCotainer'>
      <h4>주문내역</h4>
      <ul className='orderListUl'>
        <li>주문내역</li>
      </ul>
    </div> 
    </div>
  </div>
  )
}

export default Mypage