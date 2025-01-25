import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import imgBannerLive  from '../../../assets/imgs/banner_live.png';
import imgFrame       from '../../../assets/imgs/frame.png';

import Topbar         from "./topBar";

export default function UserProfle()
{

    return (
        <>
        <Topbar />
        <img src={imgBannerLive} className="w-full" alt="banner" />
        <div className="myContainer text-center">
          <h1 className="md-title w-[80%]">Get Commission on Joining Friends  </h1><br/>
          <img src={imgFrame} className="w-full" alt="frame" />  
          <Button className="w-full bg-bet-color big-button text-white-color">
            <span className="text-white-color">Invite Your Friends to Join</span>
          </Button>
        </div>
        
        </>
       

    );
}