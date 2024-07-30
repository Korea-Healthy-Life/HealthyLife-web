import React from 'react'

import MypageNav from './mypage-main/MypageNav'
import MypageMain from './mypage-main/MypageMain'
import { Route, Routes } from 'react-router-dom'
import WishApp from './wish/WishApp'
import ReviewApp from './review/ReviewApp'
import OrderApp from './order/OrderApp'
import MyPageLink from './MyPageLink'


function MyPage() {
  return (
    <div>
      <MypageMain/>
      <MypageNav />
    </div>
  )
}

export default MyPage