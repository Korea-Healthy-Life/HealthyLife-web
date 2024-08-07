import React from 'react'
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Pay2() {
  return (
    <div className='pay2Container' style={{width: '30%' ,height: '30%', marginRight: '4%', display: 'flex', flexDirection: 'column', border: '1px solid gray', paddingBottom: '0'}}>
          <h3 style={{marginTop: '4%', marginLeft: '4%'}}>결제 정보</h3>
          <br />
          <span style={{color: 'black', fontSize: '17px', marginTop: '4%', marginLeft: '4%'}}>상품금액</span>
          <br />
          <br />
          <span style={{color: 'black', fontSize: '17px', marginTop: '4%', marginLeft: '4%'}}>할인 금액</span>
          <br />
          <br />
          <span style={{color: 'black', fontSize: '17px', marginTop: '4%', marginLeft: '4%'}}>배송비</span>
          <br />
          <br />
          <span style={{color: 'black', fontSize: '17px', marginTop: '4%', marginLeft: '4%'}}>총 결제 금액</span>
          <br />
          <br />
          <div>
          <Checkbox {...label}/>
          <label htmlFor="agree">구매약관조건 동의</label>
          </div>
          <br />
          <br />
          <button style={{textAlign: 'center', backgroundColor: 'black', width: '100%', height: '40px', margin: '0', color: 'white'}}>
            결제하기
          </button>
        </div>



  )
}

export default Pay2