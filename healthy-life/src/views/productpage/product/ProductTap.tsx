import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'center'}}>
      <Box sx={{borderColor: 'divider',}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered 
          sx={{ justifyContent: 'center' }}>
          <Tab label="상품설명" {...a11yProps(0)} />
          <Tab label="상품리뷰" {...a11yProps(1)} />
          <Tab label="QnA" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        상품설명 페이지
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        상품리뷰 페이지
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        QnA페이지
      </CustomTabPanel>
    </Box>
  );
}