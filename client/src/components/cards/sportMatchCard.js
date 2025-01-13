import * as React from 'react';
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);

export default function BasicCard() {
  return (


    <Card sx={{ minWidth: 275 ,boxShadow: "2px 5px 11px 1px pink",textAlign:"center",width:"90%",margin:"auto"}} >
        <Link to="" style={{fontSize:"12px",float:"right",marginRight:'5px'}}><u>Football-International Clubs -Copa Sudamericana</u></Link>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{textAlign:"center"}} >
            <Grid item xs={4}>
              <img src="assets/imgs/basketball.png" alt="basketball" style={{width:'50%'}} />
              <p className="xs-title">Cruzeiro MG</p>

            </Grid>
            <Grid item xs={4}>
              <h1 className="sm-title text-bold">22:22</h1>
              <div className="bg-pink-div">
                Today
              </div>
              <Link to="" className="text-bold">1 / 2</Link>
            </Grid>
            <Grid item xs={4}>
              <img src="assets/imgs/basketball_league.png" alt="basketball" style={{width:'50%'}} />
              <p className="xs-title">Libertad Asun..</p>
             
            </Grid>
          </Grid>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{textAlign:"center"}} >
              <Grid item xs={4}>
               <div className="bg-pink-div text-bold" style={{justifyContent:"space-between",display:"flex"}}>
                <Link to="">1</Link>
                <Link to="">1.54</Link>
              </div>
              </Grid>
              <Grid item xs={4}>
               <div className="bg-pink-div text-bold" style={{justifyContent:"space-between",display:"flex"}}>
                <Link to="">1</Link>
                <Link to="">1.54</Link>
              </div>
              </Grid>
              <Grid item xs={4}>
               <div className="bg-pink-div text-bold" style={{justifyContent:"space-between",display:"flex"}}>
                <Link to="">1</Link>
                <Link to="">1.54</Link>
              </div>
              </Grid>
         </Grid>

    </Card>
  );
}
