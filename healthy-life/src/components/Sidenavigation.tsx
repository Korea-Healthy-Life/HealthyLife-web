import React, { useState } from 'react'
import '../style/componentStyle/Sidenaviation.css'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingCart';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'; 
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { Link, Routes } from 'react-router-dom';
import EggIcon from '@mui/icons-material/Egg';
import CloseIcon from '@mui/icons-material/Close';

const Sidenavigator:React.FC = () => {
  const [activeSide, setActiveSide] = useState<string | null>(null);

  const handleMouseSpreadClick = (side: string) => {
    setActiveSide(side);
  };

  const handleCloseClick = () => {
    setActiveSide(null);
  };


  const MoveToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  const MoveToUnder = () => {
      window.scrollTo({ top: +2000, behavior: 'smooth' });
    };

  
  
  return (
    <div className='SideContainer'>
      
      {activeSide === 'side' && 
      <ul className='sideNav'>
        <li><Link to={'/crrent'}><AccessTimeTwoToneIcon/></Link></li>
        <li><Link to={'/cart'}><ShoppingBagTwoToneIcon/></Link></li>
        <li><Link to={'/mypage/wishlist'}><FavoriteTwoToneIcon/></Link></li>
        <li onClick={MoveToTop}><KeyboardArrowUpTwoToneIcon/></li>
        <li onClick={MoveToUnder}><KeyboardArrowDownTwoToneIcon/></li>
        <li><Link to={'/survey'}>체질<br />/기호</Link></li>
      <button
      className='closeIcon'
      onClick={handleCloseClick}
      ><CloseIcon style={{fontSize:'30px'}}/>
      </button>
      </ul>
      }
      <button 
      className='pluseIcon' 
      onClick={() => handleMouseSpreadClick('side')}
      ><EggIcon style={{fontSize: '40px'}} />

      <Routes>
        
      </Routes>
      </button>
    </div>
  )
}
export default Sidenavigator;