import React, { useState } from 'react'


interface findIdData{
  name: string;
  telephoneNumber: number | string
}



function FindId() {

  let initialValue: findIdData = {
    name: '',
    telephoneNumber: ''
  };

  const [findId, setFindId] = useState<findIdData>(initialValue);


  const {name, telephoneNumber} = findId;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFindId({
      ...findId,

      [name]: value
    })
  }


  const findIdButtonHandler = (e: React.FormEvent) => {
    e.preventDefault();

    !name || !telephoneNumber ? alert(`가입이 안 되었거나 회원정보가 맞지 않습니다`) : 
    alert(`${name}님의 id는 {} 입니다`)
  }

  return (
    <div>
      <h1>아이디 찾기</h1>
      <br />
      <form >

      <input type="text" placeholder= '이름 입력창'  value={name} name='name' onChange={inputHandler}/>
      <input type="text" placeholder='전화번호 입력창' value={telephoneNumber} name='telephoneNumber' onChange={inputHandler}/>
      <br />
      <br />
      <button>아이디 찾기 버튼</button>

      </form>
    </div>
  )
}

export default FindId