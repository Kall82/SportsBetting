import * as React from 'react';
import Grid from '@mui/material/Grid';

import imgBannerLive  from '../../../assets/imgs/banner_live.png';

import Topbar         from "./topBar";
import BadgeAvatar    from "../../../components/buttons/badgeAvatar";

export default function UserProfle() {

    return (
        <>
        <Topbar />
        <img src={imgBannerLive} style={{width:"100%"}} />
        <div className="myContainer">
          <div className="wallet-card">
            <h1 className="md-title">Your Current Balance</h1><br/>
          </div>
        </div>
                 
        </>
       

    );
}