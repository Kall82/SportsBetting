import * as React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import imgBannerLive  from '../../../assets/imgs/banner_live.png';
import imgFrame       from '../../../assets/imgs/frame.png';
import imgAvatarWoman from '../../../assets/imgs/avatar_woman.png';

import Topbar         from "./topBar";

// const userList = ['James','Henry','Adorl'];

export default function FriendsList()

{
    return (
        <>
        <div className="referralhome">
          <Topbar />
          <img src={imgBannerLive} className="w-full" alt="banner" />
          <div className="w-full dark-board">
            <div className="w-full flex">
              <div className="w-[150px]">
                <img src={imgAvatarWoman} className="w-[35px]" alt="avatar_woman" />
                <span>Carlo</span>
              </div>
              <Button className="w-[100px] bg-orange-color">
              <span className="text-[16px]">Invite</span>
            </Button>
            </div>
          </div>
        </div>
      </>
    );
}