import React from "react";
import Topbar from "./topBar";
import EachBoard from "./eachBoard";
import Typography from '@mui/material/Typography';

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Bets = () => {
    return (
        <>
        <div className="randing">
           <Topbar />
           <img src="assets/imgs/banner_live.png" style={{width:"100%"}} />
           <div style={{width:"100%",background:"#313131",padding:"7px 15px 7px 15px"}} className="text-white-color xs-title">
            <Typography>
            All Live
          </Typography>
           </div>
           <div style={{width:"100%",padding:"10px"}}>
                <div className="matches">
                    Matches
                </div>
            </div>
            <EachBoard />
        </div>
        </>
    )
}

export default Bets;