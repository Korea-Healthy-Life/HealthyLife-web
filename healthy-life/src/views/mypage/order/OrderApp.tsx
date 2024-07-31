import React from 'react'
import BasicTabs from './BasicTabs'
import '../../../style/mypage/Order.css'

function OrderApp() {
  return (
    <div className='orderContainer'>
      <h4>나의 주문처리 현황</h4>
      <BasicTabs />
    </div>
  )
}

export default OrderApp

