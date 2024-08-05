import { Box, Button, InputAdornment } from '@mui/material';
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import "../../style/login/login.css"
import ReactModal from 'react-modal';
interface findIdData{
  name: string;
  phone: number | string
}



function FindId() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

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


  const findIdModalHandler = (e: React.FormEvent) => {
    e.preventDefault();

    setModalIsOpen(true);

    setFindId({
      name: '',
      phone: ''
    });
  };


  const closeModal = () => {
    setModalIsOpen(false)
  }
  return (
    <div className='findIdContainer'>

      <h1>아이디 찾기</h1>
      <br />
      
      <Box>

      
      <form className='findIdForm'>
      
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
      <Button variant='contained' onClick={findIdModalHandler}>아이디 찾기 버튼</Button>
      </form>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalContent"
        overlayClassName="modalOverlay"
      >

      {!name || !phone ? '이름 또는 휴대폰 번호가 일치하지 않습니다' : "당신의 아이디는 healthly-life입니다"}
      <button className='closeButton' onClick={closeModal}>닫힘</button>

      </ReactModal>

      </Box>
      <br />
      <br />
    </div>
    
  )
}

export default FindId