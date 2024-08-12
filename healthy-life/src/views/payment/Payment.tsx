import React from 'react'
import Pay1 from './pay1';
import Pay2 from './pay2';
import '../../style/payment/payment.css';






function Payment() {
  return (
    <div className='allPaymentContainer'>
      <br />
      <br />
      <br />
      <h1>주문 결제</h1>
      <br />
      <div className='paymentContainer'>
      <Pay1 />
      <Pay2 />
      </div>
    </div>
  )
}

export default Payment