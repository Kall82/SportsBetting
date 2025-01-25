import * as React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import imgBannerLive  from '../../../assets/imgs/banner_live.png';
import imgFrame       from '../../../assets/imgs/frame.png';

import Topbar         from "./topBar";

export default function UserProfle()
{

    return (
        <>
        <div className="referralhome">
          <Topbar />
          <img src={imgBannerLive} className="w-full" alt="banner" />
          <div className="myContainer text-center">
            <h1 className="md-title w-[70%] mx-auto text-bold">Get Commission on Joining Friends  </h1><br/>
            <img src={imgFrame} className="w-full py-8" alt="frame" />
            <Link to="/yourfriends">
              <Button className="w-full bg-bet-color text-white-color">
                <span className="text-white-color text-[16px]">Invite Your Friends to Join</span>
              </Button>
            </Link> 
            
            <h1 className="md-title py-8 text-bold">OR</h1>
            <Button className="w-full bg-orange-color">
              <span className="text-[16px]">Share on Social Media to Bring New User</span>
            </Button>
          </div>
        </div>

        </>
       

    );
}