import React, { useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import '../style/home/HeaderStyle.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


// classname = lowcamelcase로 작성
// css => style 폴더안에
//  App 건들지 말고 view/Home.tsx에 작성

export default function Header() {
  const [search, setSearch] = useState<string>('');

  const InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }


  


  return (
    <header className='header'>
  
  <p className='button1'>
    <a href="#">로그인|</a>
    <a href="#">회원가입|</a>
    <a href="#">주문조회|</a>
    <a href="#">고객센터</a>
  </p>
      
    <br />
    
    <p className= 'logo'><a href="#">logo</a> </p>
          
    


  <div className='button2'>
  <form action='submit' className='productSearch'>
  <input type="text" placeholder='제품검색' value={search} onChange={InputChangeHandler}/>
  
  </form>
  <a href="#"><AccountCircle /></a>
  <a href="#"><LocalGroceryStoreIcon /></a>
  
  </div>

    </header>
  )
}
