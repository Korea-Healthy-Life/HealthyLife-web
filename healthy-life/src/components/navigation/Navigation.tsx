import React, { useState } from 'react'
import '../../style/componentStyle/Navigaition.css'
import SubNav from './SubNav';
import { Link, Route, Routes } from 'react-router-dom';
import MypageNav from '../../views/mypage/mypage-main/MypageNav';



const Navigation:React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (nav: string) => {
    setActiveMenu(nav);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className='navContainer'>
      <div className='mainNavBox'
      onMouseEnter={()=> handleMouseEnter('nav')}
      onMouseLeave={handleMouseLeave}
      >
        <ul>
        <li
        ><Link to={'/all'}>전체상품</Link></li> 
        <li><Link to='/bestitem'>BEST.ITEM</Link></li> 
        <li><Link to='/recommand'>체질추천상품</Link></li> 
        <li><Link to='/reviews' >전체후기</Link></li> 
        <li><Link to='/calculator'>체지방계산기</Link></li> 
        </ul>
      </div>
      <div 
      
      >
        <div className='subNav'>
        <div onMouseEnter={()=> handleMouseEnter('nav')}
        onMouseLeave={handleMouseLeave}>
        {activeMenu === 'nav' && (<SubNav />)}
        </div>
        </div>
      </div>
      <Routes>
      </Routes>
    </div>
  )
}
export default Navigation;