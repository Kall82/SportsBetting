import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import imgFlagBrazil from "../../../assets/imgs/flag_brazil.png";
import imgBasketBall from "../../../assets/imgs/basketball.png";
import imgBasketBallLeague from "../../../assets/imgs/basketball_league.png";
import Rate from "../../../components/others/rate";

export default function EachResult() {   

  return (
    <div className="each-match">
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{textAlign:"center",paddingBottom:"8px"}} className="bg-grey-color">
        <Grid item xs={6} style={{textAlign:"left",paddingLeft:"20px"}} >
          <img src={imgFlagBrazil} alt="brazil" className="mr-10" />
          <label className="text-white-color">Brazil</label>
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
       <div style={{width:"100%",display:"flex",paddingBottom:"8px",borderBottom:"1px solid grey"}} >
          <div style={{width:"47%",paddingRight:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}} className="text-white-color">
             <div className="vs_one">
               <img src={imgBasketBall} style={{width:"30px"}} /><label className="text-bold text-white-color">CRU</label>
               <Rate />
             </div>
             <label style={{color:"#7D7D7D"}}>VS</label>
             <div className="vs_one">
               <img src={imgBasketBallLeague} style={{width:"30px"}} /><label className="text-bold text-white-color">BAK</label>
               <Rate />
             </div>
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