import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EachResult from "./eachResult";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ActionPanel from "./actionPanel";

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

export default function CountryPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="bet-country">
        <Tabs value={value} onChange={handleChange} style={{width:"100%"}} className="text-white-color bg-bet-color xs-title virtical">
          <div className="bet-builder">
            <Button variant="contained" className="bg-red-color">Bet Builder<HelpOutlineOutlinedIcon /></Button>
          </div>
          <Tab label="1 / 2" {...a11yProps(0)} className="top_tab" />
          <Tab label="Over/Under" {...a11yProps(1)}  className="top_tab" />
          <Tab label="DC" {...a11yProps(2)}  className="top_tab" />
          <Tab label="Handicap" {...a11yProps(3)}  className="top_tab" />
          <Tab label="CG/NG" {...a11yProps(4)}  className="top_tab"  />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <EachResult />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <EachResult />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <EachResult />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
       <EachResult />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
       <EachResult />
      </CustomTabPanel>

      <ActionPanel />
    </Box>
  );
}
