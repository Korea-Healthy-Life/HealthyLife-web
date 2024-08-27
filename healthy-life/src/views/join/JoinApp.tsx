import React, { useState } from 'react'
import '../../style/join/join.css'
import Term from './Term'

function JoinApp() {
  const [allAgree, setAllAgree] = useState<boolean>(false);


  const handleAllAgree = () => {
    setAllAgree(true)
  }
  const joinBtnAlr = () =>{
    alert("회원가입이 완료되었습니다.");
  }

  return (
    <div className='joinContainer'>
      <h2>회원가입</h2>
      <div className='joinContain'>
      <ul className='joinUl'>
      <li className='li01'><label htmlFor='userId '>
        아이디
      </label>
      <div className='checkBtn'>
      <input type="text" className='userId inputclass' placeholder='아이디를 입력해주세요.' minLength={5}
      maxLength={10}/>
      <button className='joinBtn'>중복확인</button>
      </div>
      </li>
      <li className='li02'>
      <label htmlFor='userNickname'>
        닉네임
      </label>
      <div className='checkBtn'>
      <input type="text" className='userNickname inputclass' placeholder='닉네임을 입려해주세요.'/>
      <button className='joinBtn'>중복확인</button>
      </div>
      </li>
      <li className='li03'>
      <label htmlFor='userPassword'>
        비밀번호
      </label>
          <input type="password" className='userPassword inputclass' placeholder='비밀번호를 입력해주세요.'
          minLength={8}
          maxLength={16}/>
      </li>
      <li className='li03'>
      <label htmlFor='userPassword'>
        비밀번호 확인
      </label>
        <input type="password" className='userpPasswordCheck inputclass'placeholder='비밀번호를 확인해주세요.' minLength={8}
        maxLength={16}/>
      </li>
      <li className='li04'>
      <label htmlFor='userName'>
        이름
      </label>
      <input className='inputName inputclass' type="text" id='userName' placeholder='이름을 입력해주세요.'/>
      </li>
      <li className='li05'>
      <label className='addressLabel'>
        주소
      </label>
      <input className='userAddress inputclass' placeholder='주소를 입력하세요.'/>
      </li>
      <li className='li06'>
      <label htmlFor="phonNumber">
        휴대전화번호
      </label>
      <div className='checkBtn'>
      <input type="tel" id='phonNumber' placeholder='전화번호를 입력하세요.' className='inputclass'  maxLength={11}/>
      <button className='joinBtn' type='submit'>인증번호 받기</button>
      </div>
      </li>
      <li className='li07'>
        <label className="userBirth">
          생년월일
        </label>
        <input type="text" className="birthDiv inputclass" placeholder='생년월일: YYMMDD'maxLength={6}/>

      </li>
      <li>
      <label htmlFor="userEmail">
        이메일
      </label>  
      <input type="email" className='inputclass' placeholder='이메일을 입력해주세요.'/>
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
      <button type='submit' className='joinButton' onClick={joinBtnAlr}>회원가입</button>
    </div>
  )
}

export default JoinApp