import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Grid from '@mui/material/Grid';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import {Link} from "react-router-dom";
import IconButton from '@mui/material/IconButton';


export default function EachResult() {
  return (
    <div className="each-match">
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{textAlign:"center",paddingBottom:"8px"}} className="bg-bet-color">
        <Grid item xs={2}>
          <p className="text-white-color text-bold" style={{fontSize:"18px"}}>LIVE</p>
        </Grid><Grid item xs={2}>
          <p className="xs-title text-bold" style={{color:"#03FA4C"}}>1 / 2</p>
        </Grid>
        <Grid item xs={2}>
          <p className="xs-title text-white-color">Over/Under</p>
        </Grid>
        <Grid item xs={2}>
          <p className="xs-title text-white-color">DC</p>
        </Grid>
        <Grid item xs={2}>
          <p className="xs-title text-white-color">Handicap</p>
        </Grid>
        <Grid item xs={2}>
          <p className="xs-title text-white-color">GG/NG</p>
        </Grid>
    </Grid>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{textAlign:"center",paddingBottom:"8px"}} className="bg-grey-color">
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
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
          <Link to="" style={{fontSize:"16px"}} className="text-bold" >64:35&nbsp;&nbsp;H2</Link>
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
          <Link to="" style={{fontSize:"16px"}} className="text-bold" >64:35&nbsp;&nbsp;H2</Link>
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