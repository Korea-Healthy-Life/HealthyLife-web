import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ProductTap() {
  const [value, setValue] = React.useState('one');
  const [rendering, setRendering] = React.useState('')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);

    if(value === "one"){
    setRendering( '상품설명페이지입니다.')
      
    } else if (value === 'two'){ 
      setRendering('상품후기 페이지입니다')

    } else if (value === 'three'){
      setRendering('QNA페이지입니다.')
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
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
      <div>{rendering}</div>
    </Box>
      
  
  );
}