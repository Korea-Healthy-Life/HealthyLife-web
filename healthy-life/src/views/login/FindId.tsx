import { Box, Button, InputAdornment } from '@mui/material';
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

interface findIdData{
  name: string;
  phone: number | string
}



function FindId() {

  let initialValue: findIdData = {
    name: '',
    phone: ''
  };

  const [findId, setFindId] = useState<findIdData>(initialValue);


  const {name, phone} = findId;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFindId({
      ...findId,

      [name]: value
    })
  }


  const findIdButtonHandler = (e: React.FormEvent) => {
    e.preventDefault();

    !name || !phone ? alert(`가입이 안 되었거나 회원정보가 맞지 않습니다`) : 
    alert(`${name}님의 id는 {이준우} 입니다`)
  }

  return (
    <div>

      <h1 style={{textAlign: 'center'}}>아이디 찾기</h1>
      <br />
      
      <Box>

      
      <form  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      
      <TextField
        label="이름"
        id='userName'
        sx={{ m: 1, width: '25ch'}}
        inputProps={{
        startAdornment: <InputAdornment position='start'>이름</InputAdornment>
        }}
        value={name}
        name='name'
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
      <Button variant='contained' onClick={findIdButtonHandler}>아이디 찾기 버튼</Button>
      
      </form>


      </Box>
      <br />
      <br />
    </div>
    
  )
}

export default FindId