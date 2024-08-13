import React, { useState } from 'react'
import '../../../style/currentProduct/currentProduct.css'
import { Link } from 'react-router-dom';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function CurrentProduct() {

  const[knell, setKnell] = useState<string>('')
  const [value, setValue] = React.useState<number | null>(4);

  const buttonClickHandler = () => {
    if(knell === ''){
      alert('등록되었습니다,')
      setKnell('삭제되었습니다.')
    } else if( knell === '삭제되었습니다.'){
      alert(alert);
      setKnell('')
    }

  }

  return (
    <div className='currentProductContainer'>
      <br />
      <br />
      <h2>최근본 상품</h2>
    <br />
    

    <div className='imagesFlexBox'>

      <div className='imageBox'>
      <img src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg" alt="최근본상품이미지1" />
      <br />
      <p>[웰메이드] 유기농 저칼로리 야채 파스타</p>
      <br />
      <Box
      sx={{
        '& > legend': { mt: 4 },
      }}
      >
      <Rating name="read-only" value={value} readOnly />
      </Box>
      <br />
      <br />
      <h3>13000원</h3>
      <br />
      <br />
      <hr />
      <br />
      <Link className='button2Link' to={'/cart'}><LocalGroceryStoreIcon /></Link>
      <button onClick={buttonClickHandler}><FavoriteBorderOutlinedIcon/></button>
      <DeleteOutlineOutlinedIcon/>
      </div>

      <div className='imageBox'>
      <img src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg" alt="최근본상품이미지2" />
      <br />
      <p>[웰메이드] 유기농 저칼로리 야채 파스타</p>
      <br />
      <Box
      sx={{
        '& > legend': { mt: 4 },
      }}
      >
      <Rating name="read-only" value={value} readOnly />
      </Box>
      <br />
      <br />
      <h3>13000원</h3>
      <br />
      <br />
      <hr />
      <br />
      <Link className='button2Link' to={'/cart'}><LocalGroceryStoreIcon /></Link>
      <button onClick={buttonClickHandler}><FavoriteBorderOutlinedIcon/></button>
      <DeleteOutlineOutlinedIcon/>
      </div>

      <div className='imageBox'>
      <img src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg" alt="최근본상품이미지3" />
      <br />
      <p>[웰메이드] 유기농 저칼로리 야채 파스타</p>
      <br />
      <Box
      sx={{
        '& > legend': { mt: 4 },
      }}
      >
      <Rating name="read-only" value={value} readOnly />
      </Box>
      <br />
      <br />
      <h3>13000원</h3>
      <br />
      <br />
      <hr />
      <br />
      <Link className='button2Link' to={'/cart'}><LocalGroceryStoreIcon /></Link>
      <button onClick={buttonClickHandler}><FavoriteBorderOutlinedIcon/></button>
      <DeleteOutlineOutlinedIcon/>
      </div>

      <div className='imageBox'>
      <img src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg" alt="최근본상품이미지4" />
      <br />
      <p>[웰메이드] 유기농 저칼로리 야채 파스타</p>
      <br />
      <Box
      sx={{
        '& > legend': { mt: 4 },
      }}
      >
      <Rating name="read-only" value={value} readOnly />
      </Box>
      <br />
      <br />
      <h3>13000원</h3>
      <br />
      <br />
      <hr />
      <br />
      <Link className='button2Link' to={'/cart'}><LocalGroceryStoreIcon /></Link>
      <button onClick={buttonClickHandler}><FavoriteBorderOutlinedIcon/></button>
      <DeleteOutlineOutlinedIcon/>
      </div>
      
    </div>
    
    </div>
  )
  // <div key={productImage.id}>
  //   {productImage.image}
  //   <button>장바구니</button>
  //   <button>삭제</button>
  // </div>
}

export default CurrentProduct