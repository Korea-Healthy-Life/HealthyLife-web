import React, { useState } from 'react'
import '../../style/componentStyle/Navigaition.css'
import SubNav from './SubNav';
import { Link, Route, Routes } from 'react-router-dom';
import RecommandApp from '../../views/recommand/RecommandApp';
import Bmi from '../../views/bmi/Bmi';
import JoinApp from '../../views/join/JoinApp';
import MyPage from '../../views/mypage/MyPage';
import MypageMain from '../../views/mypage/mypage-main/MypageMain';


const Navigation:React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (nav: string) => {
    setActiveMenu(nav);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div>
      <div className='mainNavBox'
      onMouseEnter={()=> handleMouseEnter('nav')}
      onMouseLeave={handleMouseLeave}>
        <ul>
        <li
        >전체상품</li> 
        <li><Link to='/best'>BEST.ITEM</Link></li> 
        <li><Link to='/recommand'>체질추천상품</Link></li> 
        <li><Link to='/review' >전체후기</Link></li> 
        <li><Link to='/calculator'>체지방계산기</Link></li> 
        <li><Link to='/join'>회원가입</Link></li> 
        <li><Link to='/mypage/*'>mypage</Link></li> 
        </ul>
      </div>
      <div 
      
      >
        <ul className='subNav'>
        <li onMouseEnter={()=> handleMouseEnter('nav')}
        onMouseLeave={handleMouseLeave}>
        {activeMenu === 'nav' && (<SubNav />)}
        </li>
        </ul>
      <Routes>
        <Route path='/recommand' element={<RecommandApp />}/>
        <Route path='/calculator' element={<Bmi />}/>
        <Route path='/join' element={<JoinApp />}/>        
        <Route path='/mypage/*' element={<MyPage />}/>

      </Routes>
      </div>
    </div>
  )
}
export default Navigation;