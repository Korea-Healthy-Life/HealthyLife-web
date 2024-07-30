import React from 'react'

import MypageNav from './mypage-main/MypageNav'
import MypageMain from './mypage-main/MypageMain'
import { Route, Routes } from 'react-router-dom'
import OrderApp from './order/OrderApp'
import ReviewApp from './review/ReviewApp'
import WishApp from './wish/WishApp'



function MyPage() {
  return (
    <div>
      <MypageMain/>
      <MypageNav />
      <Routes>
      <Route path='/mypage' element={<MypageMain/>}/> 
      <Route path='/mypage/order' element={<OrderApp />}/> 
      <Route path='/mypage/review' element={<ReviewApp />}/>
      <Route path='/mypage/wishlist' element={<WishApp />}/>
      {/* <Route path='/mypage/current' element={< />}/>
      <Route path='/mypage/coupon' element={< />}/>
      <Route path='/mypage/mileage' element={< />}/>
      <Route path='/mypage/membership' element={< />}/> */}
      </Routes>
    </div>
  )
}

export default MyPage