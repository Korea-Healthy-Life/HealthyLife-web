import React from 'react'
import '../style/componentStyle/Sidenaviation.css'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingCart';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'; 
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { Link } from 'react-router-dom';

export default function Sidenavigator() {
  const MoveToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  const MoveToUnder = () => {
      window.scrollTo({ top: -50, behavior: 'smooth' });
    };
  
  
  return (
    <div className='sideNav'>
      <ul>
        <li><Link to={'/crrent'}><AccessTimeTwoToneIcon/></Link></li>
        <li><Link to={'/cart'}><ShoppingBagTwoToneIcon/></Link></li>
        <li><Link to={'/wish'}><FavoriteTwoToneIcon/></Link></li>
        <li onClick={MoveToTop}><KeyboardArrowUpTwoToneIcon/></li>
        <li onClick={MoveToUnder}><KeyboardArrowDownTwoToneIcon/></li>
        <li>체질<br />/기호</li>
      </ul>
    </div>
  )
}
