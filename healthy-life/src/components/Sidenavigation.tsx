import React from 'react'
import '../style/componentStyle/Sidenaviation.css'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingCart';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'; 
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { Link } from 'react-router-dom';


export default function Sidenavigator() {
  
  return (
    <div className='sideNav'>
      <ul>
        <li><Link to={'/crrent'}><AccessTimeTwoToneIcon/></Link></li>
        <li><ShoppingBagTwoToneIcon/></li>
        <li><FavoriteTwoToneIcon/></li>
        <li><KeyboardArrowUpTwoToneIcon/></li>
        <li><KeyboardArrowDownTwoToneIcon/></li>
        <li>체질<br />/기호</li>
      </ul>
    </div>
  )
}
