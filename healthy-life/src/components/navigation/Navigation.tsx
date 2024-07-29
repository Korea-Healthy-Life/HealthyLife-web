import React, { useState } from 'react'
import '../../style/componentStyle/Navigaition.css'
import SubNav from './SubNav';
import { Link, Route, Routes } from 'react-router-dom';
import RecommandApp from '../../views/recommand/RecommandApp';


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
      </Routes>
      </div>
    </div>
  )
}
export default Navigation;