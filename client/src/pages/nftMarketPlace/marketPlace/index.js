import * as React from 'react';
import imgBannerLive from '../../../assets/imgs/banner_live.png';
import Topbar from "./topBar";
import BidCard from "../../../components/cards/bidCard";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import imgAvatar from "../../../assets/imgs/jane_doe.png";
import {Link} from "react-router-dom";


export default function ConnectWallet() {
    return (
        <>
        <Topbar />
        <img src={imgBannerLive} style={{width:"100%"}} />
        <div className="connect-wallet">
            <div className="wallet-manage mb-20">
                <div>
                <h3 style={{fontSize:"18px"}} className="text-white-color">Your Wallet Balance</h3>
                <Button variant="contained" className="circle">$ 10.00</Button>
                </div>
                <Button variant="contained" className="circle" style={{height:"34px",color:"black",background:"#F3C11B"}}>Connect</Button>
            </div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="mb-20">
                <Grid item xs={6}><BidCard />
                </Grid>
                <Grid item xs={6}><BidCard />
                </Grid>
            </Grid>
        </div>
        <div className="saller">
        <Typography>Top Saller</Typography>
        </div>
        <div className="connect-wallet saller-lists">
            <div className="each-saller">
                <div style={{display:"flex",width:"222px",alignItems:"center"}}>
                    <img src={imgAvatar} className="mr-10" style={{width:"54px",height:"54px",borderRadius:"50%"}} /><label className="text-white-color text-bold">User Name</label>
                </div>
                <Button variant="contained" className="circle" >$ 110.00</Button>
            </div>
            <div className="each-saller">
                <div style={{display:"flex",width:"222px",alignItems:"center"}}>
                    <img src={imgAvatar} className="mr-10" style={{width:"54px",height:"54px",borderRadius:"50%"}} /><label className="text-white-color text-bold">User Name</label>
                </div>
                <Button variant="contained" className="circle" >$ 110.00</Button>
            </div>
        </div>
        </>
       

    );
}