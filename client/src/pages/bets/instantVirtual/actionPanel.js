import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';

import Divider from '@mui/material/Divider';
import imgRun from "../../../assets/imgs/run.png";
import imgBasketBall from "../../../assets/imgs/basketball.png";
import imgBasketBallLeague from "../../../assets/imgs/basketball_league.png";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bottom-toggle"
    >
      <List>
      <ListItem style={{background:"#212121",padding:"10px!important"}}>
      <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"4px"}}>
          <span><img src={imgRun} style={{width:"20px"}} /><label className="text-bold" style={{color:"#03FA4C"}}>Away</label></span>
          <span style={{fontSize:"12px"}} className="text-white-color">1.19</span>
            </div>
       <div style={{width:"100%",display:"flex",paddingBottom:"8px",borderBottom:"1px solid grey"}} >
          <div style={{width:"47%",paddingRight:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}} className="text-white-color">
             <div className="vs_one">
               <img src={imgBasketBall} style={{width:"30px"}} /><label className="text-bold text-white-color">CRU</label>
             </div>
             <label style={{color:"#7D7D7D"}}>VS</label>
             <div className="vs_one">
               <img src={imgBasketBallLeague} style={{width:"30px"}} /><label className="text-bold text-white-color">BAK</label>
             </div>
            </div>

          </div>
          <div style={{width:"53%",paddingTop:"6px"}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={8}>
              </Grid>
              <Grid item xs={4}>
               <div className="bg-pink-div text-bold" style={{width:"100%"}}>
                  1
                </div>
              </Grid>
          </Grid>
          </div>
       </div>
      </ListItem>
      <ListItem style={{background:"#212121",padding:"10px!important"}}>
      <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"4px"}}>
          <span><img src={imgRun} style={{width:"20px"}} /><label className="text-bold" style={{color:"#03FA4C"}}>Away</label></span>
          <span style={{fontSize:"12px"}} className="text-white-color">1.19</span>
            </div>
       <div style={{width:"100%",display:"flex",paddingBottom:"8px",borderBottom:"1px solid grey"}} >
          <div style={{width:"47%",paddingRight:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}} className="text-white-color">
             <div className="vs_one">
               <img src={imgBasketBall} style={{width:"30px"}} /><label className="text-bold text-white-color">CRU</label>
             </div>
             <label style={{color:"#7D7D7D"}}>VS</label>
             <div className="vs_one">
               <img src={imgBasketBallLeague} style={{width:"30px"}} /><label className="text-bold text-white-color">BAK</label>
             </div>
            </div>

          </div>
          <div style={{width:"53%",paddingTop:"6px"}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={8}>
              </Grid>
              <Grid item xs={4}>
               <div className="bg-pink-div text-bold" style={{width:"100%"}}>
                  1
                </div>
              </Grid>
          </Grid>
          </div>
       </div>
      </ListItem>
      <ListItem style={{background:"#212121",padding:"10px!important"}}>
       <div style={{width:"100%",display:"flex",paddingBottom:"8px"}} >
          <div style={{width:"47%",paddingRight:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}} className="text-white-color">
             <div className="vs_one">
               <label className="text-bold" style={{color:"#0FAF3E"}}>Stake per bet</label>
             </div>
             <label style={{color:"#7D7D7D"}}></label>
             <div className="vs_one">
               <label className="text-white-color">(2 bets)</label>
             </div>
            </div>
          </div>
          <div style={{width:"53%",paddingTop:"6px"}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={8}>
              </Grid>
              <Grid item xs={4}>
               <div className="bg-pink-div text-bold" style={{width:"100%"}}>
                  1
                </div>
              </Grid>
          </Grid>
          </div>
       </div>
       <div style={{width:"100%",display:"flex",paddingBottom:"8px",borderBottom:"1px solid grey",justyContent:"space-between"}} >
        <label className="text-bold">Total stake</label>
        <label className="text-bold" style={{color:"#0FAF3E"}}>2.0</label>
        </div>
      </ListItem>   
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
          <div style={{width:"100%",padding:"13px",justifyContent:"space-between",display:"flex"}}>
          <Button  className="bg-bet-color big-button text-white-color">Submit</Button>
          <React.Fragment key={"bottom"}>
          <Button onClick={toggleDrawer("bottom", true)} style={{backgroundColor:"#F3C11B"}} className="big-button">Betslip</Button>
          <SwipeableDrawer
            anchor="bottom"
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
            onOpen={toggleDrawer("bottom", true)}
          >
            {list("bottom")}
          </SwipeableDrawer>
        </React.Fragment>
        </div>
    </div>
  );
}
