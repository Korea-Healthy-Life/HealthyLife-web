import React from 'react'

function Userinformation() {
  return (
    <div>
      <h3>회원정보 수정</h3>
      <br />


    <div>
      <label id='id'>아이디</label>
      <input type="text" name='id' placeholder='아이디(수정불가)' />

      <label id='nickname'>닉네임</label>
      <input type="text" name='nickname' placeholder='*닉네임' />
      <button>중복확인</button>

      <label id='password'>비밀번호</label>
      <input type="text" name='password' placeholder='비밀번호 변경'/>

      <label id='address'>주소</label>
      <input type="text" name='address' />

      <label id='telephone'>휴대전화</label>
      <input type="text" name='telephone' placeholder='*휴대전화' />
      <button>인증번호 받기</button>

      <label id='email'>이메일</label>
      <input type="text" name='email' placeholder='이메일' />

      <label id='birthday/gender'>생년월일 성별</label>
      <input type="text" name='birthday/gender' placeholder='생년월일 / 성별(체크박스)' />
    </div>
    </div>
  )
}

export default Userinformation 