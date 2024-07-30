import React from 'react'
import { Link, Routes} from 'react-router-dom'
// import Luchbox from '../../views/allproduct/j-lunchbox/Luchbox'
// import Snack from '../../views/allproduct/L-Snack/Snack'
// import Drink from '../../views/allproduct/j-drink/Drink'
// import Salad from '../../views/allproduct/L-salad/Salad'
// import Vegan from '../../views/allproduct/L-Vegan/Vegan'
// import LowerSugar from '../../views/allproduct/j-lowersugar/LowerSugar'
// import SeaFood from '../../views/allproduct/L-SeaFood.tsx/SeaFood'
// import Nuts from '../../views/allproduct/j-nuts/Nuts'
// import AllCheckinApp from '../../views/allproduct/j-checkin/AllCheckinApp'
import  '../../style/componentStyle/SubNav.css'

export default function SubNav() {
  return (
    <div> 
      <div className='subNavBox'>
        <ul>
          <li><Link to='/checkin'>닭가슴살/육류</Link></li>
          <li><Link to='/lunchbox'>도시락</Link></li>
          <li><Link to='/snack'>간식</Link></li>
          <li><Link to='/drink'>음료</Link></li>
          <li><Link to='/salad'>샐러드</Link></li>
          <li><Link to='/vegan'>비건</Link></li>
          <li><Link to='/lowersugar'>저당</Link></li>
          <li><Link to='/sea'>해산물</Link></li>
          <li><Link to='/nuts'>견과류</Link></li>
        </ul>
      </div>  
    </div>
  )
}
