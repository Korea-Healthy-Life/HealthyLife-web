import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';






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


function Pay1() {

  const [option, setOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  }

  return (
    <ThemeProvider theme={theme}>
    <div className='pay1Container' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '40%'}}>


      <div className='deliveryAddress' style={{border: '1px solid gray'}}>
        <h3 style={{marginLeft: '4%', marginTop: '4%'}}>배송지</h3>
      
      
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        marginBottom: '2%',
      }}
      noValidate
      autoComplete="off"
      >
        <TextField id="standard-basic" label="성함" variant="standard" />
        <TextField id="standard-basic" label="주소" variant="standard" />
        <TextField id="standard-basic" label="전화번호" variant="standard"/>


      </Box>
      </div>

      


        <br />
        <div className='productInformationContainer' style={{border: '1px solid gray', paddingTop: '4%', paddingLeft: '4%'}}>
          <h3>상품정보</h3>
          <br />
        <div className='productInformation' style={{display: 'flex'}}>
          <br />
        <br />
        <img style={{width: '35%', height: '120px', borderBlockColor: 'gray', display: 'inline'}} src="https://cdn.pixabay.com/photo/2017/08/25/11/10/plum-2679782_1280.jpg" alt="상품정보이미지1" />
        <div className='productImage' style={{display: 'flex', flexDirection: 'column'}}>
        <p style={{color: 'black', fontSize: '16px'}}>[냉동]데일리 블루베리 세트</p>
        <p style={{color: 'gray', fontSize: '16px'}}>[옵션: 1상자(2kg)]</p>
        <p style={{color: 'gray', fontSize: '16px'}}>수량:2개</p>
        <p style={{fontSize: '25px'}}>45000원</p>
          </div>
        </div>
        </div>

        <br />






    <div className='deliveryRequest'>
    <Box sx={{ minWidth: 100, margin: '1% 1% 1% 1%'}}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">배송요청사항</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={option}
        label="option"
        onChange={handleChange}
      >
        <MenuItem value={10}>직접 수령하겠습니다</MenuItem>
        <MenuItem value={20}>부제시 경비실에 맡겨주세요</MenuItem>
        <MenuItem value={30}>배송전 연락바랍니다</MenuItem>
        <MenuItem value={40}>문 앞에 놔둬주십시오</MenuItem>
      </Select>
    </FormControl>
  </Box>
        </div>







        <br />

        <div className='cuptonPoint' style={{border: '1px solid gray', paddingTop: '4%', paddingLeft: '4%'}}>
          <h3>쿠폰 / 포인트</h3>
          <br />
          <label id='usePoint'>포인트사용</label>
            <input type="text" style={{height: '14%'}} /> 
            <button>전액사용</button>
            <br />

            <label id='useCupon'>쿠폰 사용</label>
            <input type="text" style={{height: '14%'}} />
            <button>쿠폰사용</button>
        </div>

        <br />









        <div style={{border: '4px solid gray', borderRadius: 20, paddingTop: '4%', paddingLeft: '4%'}}>
          <h3>결제방법 선택</h3>
          <br />

        <div  style={{display: 'flex', justifyContent: 'space-around'}}>
        <button style={{width: '30%', height: '35px', borderRadius: 20}}>카드결제</button> 
        <button style={{width: '30%', height: '35px', borderRadius: 20}}>간편결제</button> 
        </div>

        </div>

    </div>
  </ThemeProvider>
  )
}

export default Pay1