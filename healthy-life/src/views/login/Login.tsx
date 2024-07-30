import React, { useState } from 'react'

interface userLogin {
  id: string | number
  password: string | number
}

function Login() {
  let  initialValue: userLogin = {
    id: '',
    password: ''
  }

  const [login, setLogin] = useState<userLogin>(initialValue);

  const {id, password} = login;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const{name, value} = e.target
    
    setLogin({

      ...login,

      [name]: value
  })
  }

  const loginButtonHandler =  (e: React.FormEvent) =>  {
    e.preventDefault();

    alert(!id || !password ? `아이디 혹은 비밀번호를 잘 못 입력하셨습니다` : `로그인되었습니다`);

    setLogin({
      id: '',
      password: ''
    }
    )
  } 
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>로그인</h1>
      <br />

      <form action="">
      <input type="text" placeholder='로그인' value={id}  onChange={inputHandler} name='id'/>
      <input type="text" placeholder='비밀번호' value={password} onChange={inputHandler} name='password'/>

      <button onClick={loginButtonHandler}>로그인</button>
      </form> 


      <a href="#">아이디 찾기 | </a>
      <a href="#">비밀번호 찾기 </a>
      <br />
      <a href='#'>비회원 구매</a>
    </div>
  )
}

export default Login