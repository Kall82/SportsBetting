import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabDetail from "./tabDetail";

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

export default function Mainboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{background:"#313131"}} className="boardMenu" variant="scrollable"
        scrollButtons="auto">
          <Tab label="Football" {...a11yProps(0)} />
          <Tab label="VFootball" {...a11yProps(1)} />
          <Tab label="BasketBall" {...a11yProps(2)} />
          <Tab label="Tennise" {...a11yProps(3)} />
          <Tab label="EFootBall" {...a11yProps(4)} />
          <Tab label="Chess" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} style={{padding:"15px"}}>
        <TabDetail />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} style={{padding:"15px"}}>
       <TabDetail />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} style={{padding:"15px"}}>
       <TabDetail />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3} style={{padding:"15px"}}>
       <TabDetail />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4} style={{padding:"15px"}}>
       <TabDetail />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5} style={{padding:"15px"}}>
        <TabDetail />
      </CustomTabPanel>
    </Box>
  );
}
