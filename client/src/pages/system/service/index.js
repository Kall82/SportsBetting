import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import imgBannerLive from '../../../assets/imgs/banner_live.png';
import imgAboutUs from "../../../assets/imgs/service.png";
import Topbar from "./topBar";

export default function SelectCountry() {


    return (
        <>
        <Topbar />
         <img src={imgBannerLive} style={{width:"100%"}} />
            <div className="login aboutus">
              <img src={imgAboutUs} alt="aboutus" style={{width:"100%"}} className="mb-35" />
              <div className="bet-width mb-35" style={{textAlign:"left"}}>
              <Typography component="" className="mb-35">
              <Link to="" style={{fontSize:"14px"}}> Note </Link> : Please note that country of residence & currency are not changeable after account creation.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. m Ipsum.dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. m Ipsum.
              </Typography>
              
              </div>
            </div>
        </>
       

    );
}