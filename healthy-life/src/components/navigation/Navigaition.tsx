import React, { useState } from 'react'
import '../../style/componentStyle/Navigaition.css'
import SubNav from './SubNav';
import { Link } from 'react-router-dom';

export default function Navigaitor() {
  const handleNav = (e: React.MouseEvent<HTMLUListElement>) => {
    
  };

  return (
    <div>
      <div className='mainNavBox' >
        <ul onClick={handleNav}>
        <li><Link to='/all'>전체상품</Link></li> 
        <li><Link to='/best'>BEST.ITEM</Link></li> 
        <li><Link to='/recommend'>체질추천상품</Link></li> 
        <li><Link to='/review' >전체후기</Link></li> 
        <li><Link to='/calculator'>체지방계산기</Link></li> 
        </ul>
      </div>
      <SubNav />
    </div>
  )
}
