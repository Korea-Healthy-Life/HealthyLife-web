import React from 'react'
import BasicTabs from './BasicTabs'
import '../../../style/mypage/Order.css'

function ReturnOrder() {
  return (
    <div className='orderContainer'>
      <h4>취소/반품</h4>
      <BasicTabs />
    </div>
  )
}

export default ReturnOrder