import * as React from 'react';
import Grid from '@mui/material/Grid';
import imgBannerLive from '../../../assets/imgs/banner_live.png';
import Topbar from "./topBar";
import Collaps from "./collaps";
import BadgeAvatar from "../../../components/buttons/badgeAvatar";

export default function UserProfle() {

    return (
        <>
        <Topbar />
         <img src={imgBannerLive} style={{width:"100%"}} />
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{textAlign:"center",paddingBottom:"8px",height:"90px",background:"#313131"}}>
          <Grid item xs={6} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <BadgeAvatar />
          </Grid>
          <Grid item xs={6} style={{display:"flex",justifyContent:"right",alignItems:"center",paddingRight:"20px"}}>
            <p style={{fontSize:"16px",float:"right"}} className="text-white-color">Total Balance</p>
          </Grid>
          </Grid>
            <div className="login faq">
              <div className="bet-width mb-35" style={{textAlign:"left"}}>
                <Collaps />
              </div>
            </div>
        </>
       

    );
}