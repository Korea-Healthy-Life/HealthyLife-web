import React from 'react'
import '../../style/mypage/mypage.css'
import MypageNav from './mypage-main/MypageNav'
import MypageMain from './mypage-main/MypageMain'
import { Route, Routes } from 'react-router-dom'
import OrderApp from './order/OrderApp'
import ReviewApp from './review/ReviewApp'
import WishApp from './wish/WishApp'
import CurrentProduct from './currentProducts/CurrentProduct'
import Reserves from './cupon,reserves,benefit/Reserves'




function MyPage() {
  return (
    <div className='mypageTotalContainer'>
      <MypageNav />
      <MypageMain/>
      <div className='emptyBox'></div>

      <Routes>
      <Route path='/mypage/order' element={<OrderApp />}/> 
        <Route path='/mypage/myreview' element={<ReviewApp />}/>
        <Route path='/mypage/wishlist' element={<WishApp />}/>
        <Route path='/mypage/current' element={<CurrentProduct />}/>
        <Route path='/mypage/mileage' element={<Reserves />}/>

    </Routes>
    </div>
  )
}

export default MyPage