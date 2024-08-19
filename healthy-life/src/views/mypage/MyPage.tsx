import React from 'react'
import '../../style/mypage/mypage.css'
import MypageMain from './mypage-main/MypageMain'
import { Route, Routes } from 'react-router-dom'
import MypageNav from './mypage-main/MypageNav'
import OrderApp from './order/OrderApp'
import ReviewApp from './review/ReviewApp'
import WishApp from './wish/WishApp'
import CurrentProduct from './currentProducts/CurrentProduct'
import Reserves from './cupon,reserves,benefit/Reserves'
import Cupon from './cupon,reserves,benefit/Cupon'
import Benefit from './cupon,reserves,benefit/Benefit'
import Userinformation from './userInformation/Userinformation'
import ReviewWrite from './review/ReviewWrite'



function MyPage() {
  return (
    <div>
    <div className='mypageTotalContainer'>
      <Routes>
    
      </Routes>
    </div>
    </div>


  )
}

export default MyPage