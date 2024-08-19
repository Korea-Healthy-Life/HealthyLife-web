import React, { useState } from 'react'
import '../../style/componentStyle/Navigaition.css'
import SubNav from './SubNav';
import { Link, Route, Routes } from 'react-router-dom';
import MypageNav from '../../views/mypage/mypage-main/MypageNav';
import MyPage from '../../views/mypage/MyPage';
import OrderApp from '../../views/mypage/order/OrderApp';
import ReviewApp from '../../views/mypage/review/ReviewApp';
import WishApp from '../../views/mypage/wish/WishApp';
import Userinformation from '../../views/mypage/userInformation/Userinformation';
import Cupon from '../../views/mypage/cupon,reserves,benefit/Cupon';
import Reserves from '../../views/mypage/cupon,reserves,benefit/Reserves';
import CurrentProduct from '../../views/mypage/currentProducts/CurrentProduct';
import ReviewWrite from '../../views/mypage/review/ReviewWrite';
import Benefit from '../../views/mypage/cupon,reserves,benefit/Benefit';




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
      
        <div onMouseEnter={()=> handleMouseEnter('nav')}
        onMouseLeave={handleMouseLeave}
        className='subNavDiv'>
        {activeMenu === 'nav' && (<SubNav />)}
        </div>
      </div>
      <Routes>
      <Route path='/mypage/*' element={<MypageNav/>}/>
      </Routes>
    </div>
  )
}
export default Navigation;