import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ProductTap() {
  const [value, setValue] = React.useState('');
  const [rendering, setRendering] = React.useState('')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);

    if(value === "explain item"){
    setRendering( '상품설명페이지입니다.')
      
    } else if (value === 'reveiw item'){ 
      setRendering('상품후기 페이지입니다')

    } else if (value === 'QnA'){
      setRendering('QnA페이지입니다.')
    }
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'start', marginLeft: '40%'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="explain item" label="explain item" />
        <Tab value="reveiw item" label="reveiw item" />
        <Tab value="QnA" label="QnA" />
      </Tabs>
      <div>{rendering}</div>
    </Box>
      
  
  );
}