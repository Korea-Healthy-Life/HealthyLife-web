import React, { useState } from 'react'
import '../style/componentStyle/Sidenaviation.css'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingCart';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'; 
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

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
        <li><Link to={'/wish'}><FavoriteTwoToneIcon/></Link></li>
        <li onClick={MoveToTop}><KeyboardArrowUpTwoToneIcon/></li>
        <li onClick={MoveToUnder}><KeyboardArrowDownTwoToneIcon/></li>
        <li>체질<br />/기호</li>
      <button
      className='closeIcon'
      onClick={handleCloseClick}
      ><HighlightOffIcon style={{fontSize:'30px'}}/>
      </button>
      </ul>
      }
      <button 
      className='pluseIcon' 
      onClick={() => handleMouseSpreadClick('side')}
      ><AddCircleOutlineIcon style={{fontSize: '40px'}} />
      </button>
    </div>
  )
}
export default Sidenavigator;