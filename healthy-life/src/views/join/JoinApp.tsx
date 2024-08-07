import React from 'react'
import '../../style/join/join.css'
import Term from './Term'

function JoinApp() {
  return (
    <div className='joinContainer'>
      <h2>회원가입</h2>
      <div className='joinContain'>
      <ul className='joinUl'>
      <li className='li01'><label htmlFor='userId '>
        아이디
      </label>
      <div className='checkBtn'>
      <input type="text" id='userId' placeholder='아이디를 입력해주세요.'/>
      <button className='joinBtn'>중복확인</button>
      </div>
      </li>
      <li className='li02'>
      <label htmlFor='userNickname'>
        닉네임
      </label>
      <div className='checkBtn'>
      <input type="text" id='userNickname' placeholder='닉네임을 입려해주세요.'/>
      <button className='joinBtn'>중복확인</button>
      </div>
      </li>
      <li className='li03'>
      <label htmlFor='userPassword'>
        비밀번호
      </label>
          <input type="password" id='userPassword' placeholder='비밀번호를 입력해주세요.'/>
      </li>
      <li className='li03'>
      <label htmlFor='userPassword'>
        비밀번호 확인
      </label>
        <input type="password" id='userpPasswordCheck'placeholder='비밀번호를 확인해주세요.'/>
      </li>
      <li className='li04'>
      <label htmlFor='userName'>
        이름
      </label>
      <input className='inputName' type="text" id='userName' placeholder='이름을 입력해주세요.'/>
      </li>
      <li className='li05'>
      <label className='addressLabel'>
        주소
      </label>
      <input className='userAddress' placeholder='주소를 입력하세요.'/>
      </li>
      <li className='li06'>
      <label htmlFor="phonNumber">
        휴대전화번호
      </label>
      <div className='checkBtn'>
      <input type="tel" id='phonNumber' placeholder='전화번호를 입력하세요.' className='joinBtn'/>
      <button >인증번호 받기</button>
      </div>
      </li>
      <li className='li07'>
        <label className="userBirth">
          생년월일
        </label>
        <div className='birthDiv'>
          <input type="month" className="birthMonth"/>
          <label>월</label>
          <input type="number" className="birthday" min={1} max={31}/>
          <label>일</label>
        </div>
      </li>
      <li>
      <label htmlFor="userEmail">
        이메일
      </label>  
      <input type="email" id='userEmail'/>
      </li>
      </ul>
      <div className='li08'>
      <label className='gender' htmlFor="userSex">
        성별
      </label>
      <div className='genderDiv'>
      <label className='usergender'>
        남
      </label>
      <input type="radio" name='usergender'/>
      <label>
        여
      </label>
      <input type="radio" name='usergender'/>
      </div>
      </div>
        <Term />
      </div>
      <button type='submit' className='joinButton'>회원가입</button>
    </div>
  )
}

export default JoinApp