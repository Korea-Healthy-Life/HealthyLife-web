import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './styles/HeaderStyle.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';



export default function Header() {
  const [search, setSearch] = useState<string>('');

  const InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }


  


  return (
    <header>
  
  <p className='button1'>
    <a href="#">로그인|</a>
    <a href="#">회원가입|</a>
    <a href="#">주문조회|</a>
    <a href="#">고객센터</a>
  </p>
      
    <br />
    
    <a className= "logo" href="#">Logo</a>
          





    


  <div className='button2'>
  <input type="text" placeholder='제품검색' value={search} onChange={InputChangeHandler}  size={40}/>
  <a href="#"><AccountCircle /></a>
  <a href="#"><LocalGroceryStoreIcon /></a>
  
  </div>

    </header>
  )
}
