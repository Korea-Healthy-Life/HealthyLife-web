import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Luchbox from '../../views/allproduct/Luchbox'
import Snack from '../../views/allproduct/Snack'
import Drink from '../../views/allproduct/Drink'
import Salad from '../../views/allproduct/Salad'
import Vegan from '../../views/allproduct/Vegan'
import LowerSugar from '../../views/allproduct/LowerSugar'
import SeaFood from '../../views/allproduct/SeaFood'
import Nuts from '../../views/allproduct/Nuts'
import  '../../style/componentStyle/SubNav.css'
import AllCheckinApp from '../../views/allproduct/checkin/AllCheckinApp'

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
        <Routes>
        {/* <span >닭가슴살/육류</span> */}
        <Route path="/checkin" element={<AllCheckinApp />} />
        {/* <span>도시락</span> */}
        <Route path="/lunchbox" element={<Luchbox />} />
        {/* <span>간식</span> */}
        <Route path="/snack" element={<Snack />} />
        {/* <span>음료</span> */}
        <Route path="/drink" element={<Drink />} />
        {/* <span>샐러드</span> */}
        <Route path="/salad" element={<Salad />} />
        {/* <span>비건</span> */}
        <Route path="/vegan" element={<Vegan />} />
        {/* <span>저당</span> */}
        <Route path="/lowersugar" element={<LowerSugar />} />
        {/* <span>해산물</span> */}
        <Route path="/sea" element={<SeaFood />} />
        {/* <span>견과류</span> */}
        <Route path="/nuts" element={<Nuts />} />
        </Routes>
    </div>
  )
}
