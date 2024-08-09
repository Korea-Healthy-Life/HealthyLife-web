import React, { useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import '../style/componentStyle/HeaderStyle.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from 'react-router-dom';


// classname = lowcamelcase로 작성
// css => style 폴더안에
//  App 건들지 말고 view/Home.tsx에 작성i

export default function Header() {
  const [search, setSearch] = useState<string>('');

  const InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }


  


  return (
    <header className='header'>
  
    <div className='headerFlexBox'>
    
    <div className='logo'>
      <br />
    <p><Link to={'/'}>Logo</Link> </p>
    </div>



    

    <div className='buttonFlexBox1'>
    <p className='button1'>
    <Link to={'/login'}>로그인</Link>
    |
    <Link to={'/join'}>회원가입</Link>
    |
    <Link to={'/mypage/orderApp'}>주문조회</Link>
  </p>
      
    <br />
        
          
    


  <div className='button2'>
  <form action='submit' className='productSearch'>
  <input type="text" placeholder='제품검색' value={search} onChange={InputChangeHandler}/>
  </form>
  <Link to={'/mypage/*'}><AccountCircle /></Link>
  <Link to={'/cart'}><LocalGroceryStoreIcon /></Link>
  </div>

    </div>



  </div>


  
  <br />
    </header>
  )
}
