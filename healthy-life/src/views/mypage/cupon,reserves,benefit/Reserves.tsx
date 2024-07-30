import React from 'react'

function Reserves() {
  return (
    <div>
      <h3>적립금</h3>
      <br />
      <aside style={{float: 'left'}}>
      <a href="#">내 정보</a>
      <a href="#">나의 주문처리 현황</a>
      <a href="#">내가 작성한 후기</a>
      <a href="#">위시리스트</a>
      <a href="#">최근 본 상품 목록</a>
    </aside>

    <div style={{float: 'left'}}>
      <div>
        총 적립금
      </div>

      <div>
        적립금 내역
      </div>
    </div>

    </div>
  )
}

export default Reserves