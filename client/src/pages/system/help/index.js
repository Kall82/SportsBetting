import * as React from 'react';

import imgBannerLive from '../../../assets/imgs/banner_live.png';
import imgAboutUs from "../../../assets/imgs/help.png";
import Topbar from "./topBar";

export default function SelectCountry() {



    return (
        <>
        <Topbar />
         <img src={imgBannerLive} style={{width:"100%"}} />
            <div className="login aboutus">
              <img src={imgAboutUs} alt="aboutus" style={{width:"100%"}} className="mb-35" />
              <div className="bet-width mb-35" style={{textAlign:"left"}}>
              </div>
            </div>
        </>
       

    );
}