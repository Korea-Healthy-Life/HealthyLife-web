import React from 'react'
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Pay2() {
  return (
    <div className='pay2Container'>
          <h3>결제 정보</h3>
          <br />
          <span>상품금액</span>
          <br />
          <br />
          <span>할인 금액</span>
          <br />
          <br />
          <span>배송비</span>
          <br />
          <br />
          <span>총 결제 금액</span>
          <br />
          <br />
          <div>
          <Checkbox {...label}/>
          <label htmlFor="agree">구매약관조건 동의</label>
          </div>
          <br />
          <br />
          <button>
            결제하기
          </button>
        </div>



  )
}

export default Pay2