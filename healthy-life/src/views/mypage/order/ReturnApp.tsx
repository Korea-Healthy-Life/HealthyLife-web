import React, { useState } from 'react'
import BasicTabs from './BasicTabs'
import '../../../style/mypage/Order.css'
import { ProductProps } from '../../allproduct/j-checkin/AllCheckinApp';



function ReturnOrder() {
  

  return (
    <div className='orderContainer'>
      <BasicTabs />
    </div>
  )
}

export default ReturnOrder