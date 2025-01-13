import * as React from 'react';

import Grid from '@mui/material/Grid';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import IconButton from '@mui/material/IconButton';


export default function EachResult() {
  return (
    <div className="each-match">
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{textAlign:"center",paddingBottom:"8px"}} className="bg-grey-color">
        <Grid item xs={6} style={{textAlign:"left",paddingLeft:"20px"}} >
          <p className="xs-title text-white-color">19/10 Saturday</p>
        </Grid>
        <Grid item xs={2}>
          <p className="text-white-color text-bold" style={{fontSize:"16px"}} >1</p>
        </Grid>
        <Grid item xs={2}>
          <p className="text-white-color text-bold"  style={{fontSize:"16px"}} >X</p>
        </Grid>
        <Grid item xs={2}>
          <p className="text-white-color text-bold"  style={{fontSize:"16px"}} >2</p>
        </Grid>
    </Grid>
    <List sx={{ width: '100%',backgroundColor:'#212121' }}>
      <ListItem>
       <div style={{width:"100%",display:"flex",justifyContent:'space-between',paddingTop:"4px"}}>
          <div className="bestodds">
            <p>BEST ODDS</p>
          </div>
          <p style={{fontSize:"12px"}} className="text-white-color">17:00 ID 33178 England - Premier League</p>
          <IconButton color="inherit" style={{textAlign:"right",width:"30px",height:"30px"}} className="bg-white-color" >
            <StackedLineChartIcon />
          </IconButton>
       </div>
       <div style={{width:"100%",display:"flex",paddingBottom:"8px",borderBottom:"1px solid grey"}} >
          <div style={{width:"47%",paddingRight:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}} className="text-white-color">
             <p className="xs-title te">9de Octubre FC</p>
             <p className="xs-title">0</p>
            </div>
             <div style={{display:"flex",justifyContent:"space-between"}} className="text-white-color">
             <p className="xs-title te">Vergas Torese</p>
             <p className="xs-title">0</p>
            </div>
             <div style={{display:"flex",justifyContent:"space-between"}} className="text-white-color">
             <p className="xs-title te">+43</p>
            </div>
          </div>
          <div style={{width:"53%",paddingTop:"6px"}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4}>
                <div className="bg-pink-div text-bold bg-bet-color text-white-color" style={{width:"100%"}}>
                  3.05
                </div>
              </Grid>
              <Grid item xs={4}>
               <div className="bg-pink-div text-bold bg-bet-color text-white-color" style={{width:"100%"}}>
                  3.05
                </div>
              </Grid>
              <Grid item xs={4}>
               <div className="bg-pink-div text-bold bg-bet-color text-white-color" style={{width:"100%"}}>
                  3.05
                </div>
              </Grid>
          </Grid>
          </div>
       </div>
      </ListItem>
<ListItem>
       <div style={{width:"100%",display:"flex",justifyContent:'space-between',paddingTop:"4px"}}>
          <div className="bestodds">
            <p>BEST ODDS</p>
          </div>
          <p style={{fontSize:"12px"}} className="text-white-color">17:00 ID 33178 England - Premier League</p>
          <IconButton color="inherit" style={{textAlign:"right",width:"30px",height:"30px"}} className="bg-white-color" >
            <StackedLineChartIcon />
          </IconButton>
       </div>
       <div style={{width:"100%",display:"flex",paddingBottom:"8px",borderBottom:"1px solid grey"}} >
          <div style={{width:"47%",paddingRight:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}} className="text-white-color">
             <p className="xs-title te">9de Octubre FC</p>
             <p className="xs-title">0</p>
            </div>
             <div style={{display:"flex",justifyContent:"space-between"}} className="text-white-color">
             <p className="xs-title te">Vergas Torese</p>
             <p className="xs-title">0</p>
            </div>
             <div style={{display:"flex",justifyContent:"space-between"}} className="text-white-color">
             <p className="xs-title te">+43</p>
            </div>
          </div>
          <div style={{width:"53%",paddingTop:"6px"}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4}>
                <div className="bg-pink-div text-bold bg-bet-color text-white-color" style={{width:"100%"}}>
                  3.05
                </div>
              </Grid>
              <Grid item xs={4}>
               <div className="bg-pink-div text-bold bg-bet-color text-white-color" style={{width:"100%"}}>
                  3.05
                </div>
              </Grid>
              <Grid item xs={4}>
               <div className="bg-pink-div text-bold bg-bet-color text-white-color" style={{width:"100%"}}>
                  3.05
                </div>
              </Grid>
          </Grid>
          </div>
       </div>
      </ListItem>
    </List>
    </div>
    
  );
}