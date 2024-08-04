import React from 'react'

function Payment() {
  return (
    <div>
      <h2>주문 결제</h2>

      <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{backgroundColor: '#b5bbb0'}}>
          <h3>배송지</h3>
          <input type="text" placeholder='받는 분 성함' />
          <br />
          <input type="text" placeholder='주소' />
          <br/>
          <input type="text" placeholder='전화번호' />
          <br />
        </div>

          <div style={{backgroundColor: '#b5bbb0'}}>
            <h3 style={{backgroundColor: 'darkgray'}}>상품정보</h3>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>

          <div style={{display: 'felx', flexDirection: 'row'}}>
            <h3>배송요청 사항</h3>
              <select name="delivery Request" id="Request">
                <option value="선택">선택</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
          </div>
          
          <div>
            <h3>쿠폰 / 포인트</h3>
            <br />
            <label id='usePoint'>포인트사용</label>
              <input type="text" /> 
              <button>전액사용</button>
              <br />

              <label id='useCupon'>쿠폰 사용</label>
              <input type="text" />
              <button>쿠폰사용</button>
          </div>


          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <h3>결제방법 선택</h3>

          <div>카드결제</div> <div>간편결제 </div>

          </div>

      </div>









        <div style={{backgroundColor:'#b5bbb0'}}>
          <h3 style={{background: 'darkgray'}}>주문결제 금액</h3>
          <br />
          <br />
          <p>상품금액</p>
          <br />
          <br />
          <p>할인 금액</p>
          <br />
          <p>배송비</p>
          <br />
          <br />
          <br />
          <p>총 결제 금액</p>
          <br />
          <br />
          <input type="checkBox" id='agree' name='agree' />
          <label htmlFor="agree">agree</label>
          <br />
          <br />
          <div style={{textAlign:'center', backgroundColor: 'white'}}>
            결제하기
          </div>
        </div>





      </div>
    </div>
  )
}

export default Payment