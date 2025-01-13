import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import EachResult from "./eachResult";
import CountryPanel from "./countryPanel";

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

export default function Eachboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} style={{width:"100%",background:"#313131"}} className="text-white-color xs-title virtical">
          <Tab label="Brazil" {...a11yProps(0)} className="top_tab"/>
          <Tab label="England" {...a11yProps(1)}  className="top_tab" />
          <Tab label="Spain" {...a11yProps(2)}  className="top_tab" />
          <Tab label="Italy" {...a11yProps(3)}  className="top_tab" />
          <Tab label="Germany" {...a11yProps(4)}  className="top_tab"  />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CountryPanel />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <CountryPanel />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <CountryPanel />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
       <CountryPanel />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
       <CountryPanel />
      </CustomTabPanel>
    </Box>
  );
}
