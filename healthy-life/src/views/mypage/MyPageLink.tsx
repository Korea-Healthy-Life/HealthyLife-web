import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WishApp from './wish/WishApp'
import ReviewApp from './review/ReviewApp'
import OrderApp from './order/OrderApp'

export default function MyPageLink() {
  return (
    <div>
      <Routes>
        <Route path='/mypage/userinformation' element={<WishApp />}/>
        <Route path='/mypage/review' element={<ReviewApp />}/>
        <Route path='/mypage/order' element={<OrderApp />}/>
        {/* <Route path='/mypage/current' element={< />}/>
        <Route path='/mypage/coupon' element={< />}/>
        <Route path='/mypage/mileage' element={< />}/>
        <Route path='/mypage/userInformation' element={< />}/>
        <Route path='/mypage/membership' element={< />}/> */}
      </Routes>
    </div>
  )
}
