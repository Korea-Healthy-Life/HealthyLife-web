import { Box, Button, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react'


interface findPasswordData{
  id: string | string;
  phone: number | string
}


function FindPassword() {

  let initialValue: findPasswordData = {
    id: '',
    phone: ''
  };

  const [findPassword, setFindPassword] = useState<findPasswordData>(initialValue);


  const {id, phone} = findPassword;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFindPassword({
      ...findPassword,

      [name]: value
    })
  }


  const findPasswordButtonHandler = (e: React.FormEvent) => {
    e.preventDefault();

    !id || !phone ?  alert(`가입이 안 되었거나 회원정보가 맞지 않습니다`) :
    alert('재발급된 비밀번호는 1234입니다')
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>비밀번호 발급</h1>
      <br />
      <Box>

      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

      <TextField 
      label="아이디"
      id='userId'
      sx={{ m: 1, width: '25ch'}}
      inputProps={{
      startAdornment: <InputAdornment position='start'>아이디</InputAdornment>
      }}
      value={id}
      name='id'
      onChange={inputHandler}
      />

      <TextField 
      label="전화번호"
      id='userPhone'
      sx={{ m: 1, width: '25ch'}}
      inputProps={{
      startAdornment: <InputAdornment position='start'>전화번호</InputAdornment>
      }}
      value={phone}
      name='phone'
      onChange={inputHandler}
      />
      <Button variant='contained' onClick={findPasswordButtonHandler}>비밀번호 발급 버튼</Button>

      </form>

      </Box>
      <br />
      <br />
    </div>
  )
}

export default FindPassword