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
           <EachBoard />
        </div>
        </>
    )
}

export default Bets;