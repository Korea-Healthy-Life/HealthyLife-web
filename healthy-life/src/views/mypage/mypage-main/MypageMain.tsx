import React from 'react'
import '../../../style/mypage/MypageMain.css'
import MypageNav from './MypageNav'

function MypageMain() {
  return (
    <div>
    <div className='mypageAllContainer'>
      <div className='mypageMainContainer'>
        <h2>마이 쇼핑</h2>
        <ul>
          <li>회원이름</li>
          <li>회원등급</li>
          <li>멤버십</li>
          <li>적립금</li>
          <li>쿠폰 갯수</li>
          <li>주문</li>
        </ul>
      </div>

      <div className='mypageSuvContainer'>
        <h4>나의 주문처리현황</h4>
        <ul>
          <li>0</li>
          <li>&#62;</li>
          <li>0</li>
          <li>&#62;</li>
          <li>0</li>
          <li>&#62;</li>
          <li>0</li>
        </ul>
      </div>
    </div>

    <h4>주문내역</h4>
    <div>
      주문내역
    </div>  
  </div>
  )
}

export default MypageMain