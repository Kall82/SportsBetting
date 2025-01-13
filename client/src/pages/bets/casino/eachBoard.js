import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import imgSearch from "../../../assets/imgs/search.png";



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
    <Box sx={{ width: '100%',background:'#313131',padding:"10px"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className=" justify-content"  >
          <div className="imgButton" {...a11yProps(0)}>
          <img src={imgSearch}  />
          </div>
          <div className="imgButton" {...a11yProps(2)}>
          <img src={imgSearch}  />
          </div>
          <div className="imgButton" {...a11yProps(3)}>
          <img src={imgSearch}  />
          </div>
          <div className="imgButton" {...a11yProps(4)}>
          <img src={imgSearch}  />
          </div>
          <div className="imgButton" {...a11yProps(4)}>
          <img src={imgSearch}  />
          </div>
          <div className="imgButton" {...a11yProps(4)}>
          <img src={imgSearch}  />
          </div>
        </Tabs>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
       <h1>1</h1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <h1>2</h1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <h1>3</h1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <h1>4</h1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <h1>5</h1>
      </CustomTabPanel> */}
    </Box>
  );
}
