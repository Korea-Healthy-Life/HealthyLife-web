import React, { useState } from 'react'


function NonMember() {

  const [orderNumber, setOrderNumber] = useState('')

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderNumber(e.target.value)
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h2>주문조회</h2>

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <input type="text"  placeholder='주문번호 입력' value={orderNumber} onChange={inputHandler}/>
          <button>조회</button>
        </div>
        <>
        
        </>
    </div>
  )
}

export default NonMember