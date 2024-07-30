import React from 'react'

function ChangePassword() {
  return (
    <div>
      <h2>비밀번호 변경</h2>
      <br />
      <aside style={{float: 'left'}}>
      <a href="#">내 정보</a>
      <a href="#">나의 주문처리 현황</a>
      <a href="#">내가 작성한 후기</a>
      <a href="#">위시리스트</a>
      <a href="#">최근 본 상품 목록</a>
    </aside>

      <div style={{float: 'left'}}>
        <label id='changePassword'>변경된 비밀번호</label>
        <input type="text" name='changepassword' />
        <br />

        <label id='passwordCheck'>비밀번호 확인</label>
        <input type="text" name='passwordCheck' />
        <br />
        <button>수정</button>
      </div>
    </div>
  )
}

export default ChangePassword