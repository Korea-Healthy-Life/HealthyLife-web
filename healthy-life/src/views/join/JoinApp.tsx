import React from 'react'
import '../../style/join/join.css'

function JoinApp() {
  return (
    <div className='joinCtainer'>
      <h2>회원가입</h2>
      <form >
      <ul className='joinUl'>
      <li className='li01'><label htmlFor='userId '>
        아이디
      </label>
      <input type="text" id='userId' placeholder='아이디를 입력해주세요.'/>
      <button className='joinBtn'>중복확인</button>
      </li>
      <li className='li02'>
      <label htmlFor='userNickname'>
        닉네임
      </label>
      <input type="text" id='userNickname' placeholder='닉네임을 입려해주세요.'/>
      <button className='joinBtn'>중복확인</button>
      </li>
      <li className='li02'>
      <label htmlFor='userPassword'>
        비밀번호
      </label>
      <input type="password" id='userPassword' placeholder='비밀번호를 입력해주세요.'/>
      </li>
      <li className='li03'>
      <label htmlFor='userPasswordCkeck'>
        비밀번호 확인
      </label>
      <input type="password" id='userpPasswordCheck'placeholder='비밀번호를 입력해주세요.'/>
      </li>
      <li className='li04'>
      <label htmlFor='userName'>
        이름
      </label>
      <input type="text" id='userName' placeholder='이름을 입력해주세요.'/>
      </li>
      <li className='li05'>
      <label className='addressLabel'>
        주소
      <textarea className='userAddress' placeholder='주소를 입력하세요.'/>
      </label>
      </li>
      <li className='li06'>
      <label htmlFor="phonNumber">
        휴대전화번호
      </label>
      <input type="tel" id='phonNumber' placeholder='전화번호를 입력하세요.'/>
      <button >인증번호 받기</button>
      </li>
      <li className='li07'>
        <label className="userBirth">
          생년월일
          <input type="month" className="birthMonth" min={1} max={12}/>
          <label>월</label>
          <input type="number" className="birthday" min={1} max={31}/>
          <label>일</label>
        </label>
      </li>
      <li>
      <label htmlFor="userEmail">
        이메일
      </label>
      <input type="email" id='userEmail'/>
      </li>
      <li className='li08'>
      <label htmlFor="userSex">
        성별
      </label>
      <br />
      <div className='userSexContainer'>
      <label className='userSex'>
        남
      <input type="radio" name='userSex'/>
      </label>
      <label>
        여
      <input type="radio" name='userSex'/>
      </label>
      </div>
      </li>
      </ul>
      <button type='submit' className='joinButton'>회원가입</button>
      </form>

    </div>
  )
}

export default JoinApp