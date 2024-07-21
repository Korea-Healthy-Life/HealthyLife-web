import React from 'react'
import '../style/componentStyle/Sidenaviation.css'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingCart';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'; 
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';


export default function Sidenavigator() {
  
  return (
    <div className='sideNav'>
      <ul>
        <li>최근 본<br />상품</li>
        <li><ShoppingBagTwoToneIcon/></li>
        <li><FavoriteTwoToneIcon/></li>
        <li><KeyboardArrowUpTwoToneIcon/></li>
        <li><KeyboardArrowDownTwoToneIcon/></li>
        <li>체질<br />/기호</li>
      </ul>
    </div>
  )
}
