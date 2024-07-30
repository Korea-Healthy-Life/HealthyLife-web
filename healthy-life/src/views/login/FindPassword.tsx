import React, { useState } from 'react'


interface findPasswordData{
  id: string | string;
  telephoneNumber: number | string
}


function FindId() {

  let initialValue: findPasswordData = {
    id: '',
    telephoneNumber: ''
  };

  const [findPassword, setFindPassword] = useState<findPasswordData>(initialValue);


  const {id, telephoneNumber} = findPassword;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFindPassword({
      ...findPassword,

      [name]: value
    })
  }


  const findIdButtonHandler = (e: React.FormEvent) => {
    e.preventDefault();

  }

  return (
    <div>
      <h1>비밀번호 발급</h1>
      <br />
      <form >

      <input type="text" placeholder= '아이디 입력창'  value={id} name='id' onChange={inputHandler}/>
      <input type="text" placeholder='전화번호 입력창' value={telephoneNumber} name='telephoneNumber' onChange={inputHandler}/>
      <br />
      <br />
      <button>비밀번호 발급 버튼</button>

      </form>
    </div>
  )
}

export default FindId