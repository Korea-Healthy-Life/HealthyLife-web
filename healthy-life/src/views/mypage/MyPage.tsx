import React from 'react'
import '../../style/mypage/mypage.css'
import MypageMain from './mypage-main/MypageMain'
import { Route, Routes } from 'react-router-dom'
import MypageNav from './mypage-main/MypageNav'



function MyPage() {
  return (
    <div>
    <div className='mypageTotalContainer'>
      <MypageNav />
      <MypageMain />
      <div>
        
      </div>
      <Routes>
      <Route path='/mypage/' element={<MypageMain />}/>
      </Routes>
    </div>
    </div>


  )
}

export default MyPage