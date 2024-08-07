import React, { useState } from 'react'
import '../../../style/detailProductSlider/productSlider.css'
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface productImages{
  images: string[]
}



const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'gray',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'gray',
          '&.Mui-focused': {
            color: 'gray',
          },
        },
      },
    },
  },
});


const Product: React.FC<productImages> = ({images}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [option, setOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length -1 : prevIndex -1 ));
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex)=> (prevIndex === images.length -1 ? 0 : prevIndex + 1));
  }


  const visibleImages = images.slice(currentIndex, currentIndex + 4);
  if(visibleImages.length < 4){
    visibleImages.push(...images.slice(0, 4 -visibleImages.length));
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>

      <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '10%', marginRight: '10%'}}>
        
        <div className='productImage' style={{padding: '0', width: '65%'}}>
          <img src='https://cdn.pixabay.com/photo/2017/08/25/11/10/plum-2679782_1280.jpg' alt="상세페이지 상품 이미지" 
          width={'50%'}  style={{margin: '0px'}} />
        </div>








        <div className='productData' style={{margin: '0', width: '35%', display: 'flex', flexDirection: 'column'}}>
          <h3 style={{border: '4px solid gray', borderRadius: 20}}>상품명</h3>        
        <br />
        <br />
        <br />
        <div style={{border: '4px solid gray'}}>
          <h3>상품금액: 000</h3>
          <h3>배송기간: ~~ </h3>
        </div>
        <br />
        <br />
        <br />
        <Box sx={{ minWidth: 100, margin: '1% 1% 1% 1%'}}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">-[필수] 옵션 -</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={option}
        label="option"
        onChange={handleChange}
      >
        <MenuItem value={10}>1</MenuItem>
        <MenuItem value={20}>2</MenuItem>
        <MenuItem value={30}>3</MenuItem>
        <MenuItem value={40}>4</MenuItem>
      </Select>
    </FormControl>
  </Box>
        <br />
        <br />
        <div className='button' style={{display: 'flex', justifyContent: 'space-around'}}>
          <button onClick={openModal} >장바구니</button>
          <Link to={'/myPage/wishlist'}><button >WISH</button></Link>
          <Link to={'/payment'}><button >주문</button></Link>
        </div>

        </div>


        <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalContent"
        overlayClassName="modalOverlay"
        >

          <div className='modal'>
            <h2>장바구니(모달창)</h2>
              <br />
              <br />
              <br />
          <div className='cartModalContainer'>
            
              <button className='prevButton' onClick={handlePrevClick}>&#10094;</button>
            <div className='modalImages'>
              {visibleImages.map((image, index) => (
          <div key={index} className='relatedModalImage'>
            <img src={image} alt={`slide ${index}`} />
          </div>
        ))}
        <button className='nextButton' onClick={handleNextClick}>&#10095;</button>
            </div>
          



          </div>

          <br />
          <br />
          
          <div className='modalbuttonContainer' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          <Link to={'/payment'}> <button>바로주문</button></Link>
          <Link to={'/cart'}><button>장바구니 이동</button></Link>
          <button onClick={closeModal}>쇼핑계속하기</button>
          </div>
          
          </div>

        </ReactModal>
      </div>
      <br />
      <br />


      
    </ThemeProvider>


    
  )
}

export default Product