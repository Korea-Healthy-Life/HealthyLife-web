import React from 'react'
import Pay1 from './pay1';
import Pay2 from './pay2';







function Payment() {
  return (
    <div className='paymentAllContainer' style={{paddingLeft: '20%' , paddingRight: '20%'}}>
      <br />
      <br />
      <br />
      <h1 style={{marginLeft:'7%'}}>주문 결제</h1>
      <br />
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <Pay1 />
      <Pay2 />
      </div>
    </div>
  )
}

export default Payment