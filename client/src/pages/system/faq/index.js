import * as React from 'react';

import imgBannerLive from '../../../assets/imgs/banner_live.png';
import imgAboutUs from "../../../assets/imgs/faq.png";
import Topbar from "./topBar";
import Collaps from "./collaps";

export default function SelectCountry() {



    return (
        <>
        <Topbar />
         <img src={imgBannerLive} style={{width:"100%"}} />
            <div className="login faq">
              <img src={imgAboutUs} alt="aboutus" style={{width:"100%"}} className="mb-35" />
              <div className="bet-width mb-35" style={{textAlign:"left"}}>
                <Collaps />
              </div>
            </div>
        </>
       

    );
}