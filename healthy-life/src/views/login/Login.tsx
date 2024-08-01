import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput'
import Button from '@mui/material/Button';


interface userLogin {
  id: string | number
  password: string | number
}

let  initialValue: userLogin = {
  id: '',
  password: ''
}

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [login, setLogin] = useState<userLogin>(initialValue);
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  
  
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
      <br />  
    <Box>
      <form  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <TextField
        label="아이디"
        id='userId'
        sx={{ m: 1, width: '25ch'}}
        inputProps={{
          startAdornment: <InputAdornment position='start'>아이디</InputAdornment>
        }}
        value={id}
        onChange={inputHandler}
        name='id'
      />

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id= "userPassword"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value={password}
            onChange={inputHandler}
            label="Password"
            name='password'
          />
        </FormControl>
      <Button variant="contained" onClick={loginButtonHandler}>로그인</Button>
      </form>
    
      <br />
      
      <p style={{textAlign: 'center', fontSize: '16px'}}>
      <Link to={'/login/FindId'}>아이디 찾기 | </Link>
      <Link to={'/login/FindPassword'}>비밀번호 찾기</Link>
      <br />
      <br />
      <a href='#'>비회원 구매</a>

      </p>


    </Box>
    <br />

    
    </div>
  )
}
      

export default Login