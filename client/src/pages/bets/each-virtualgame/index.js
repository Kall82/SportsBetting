import React from "react";
import Topbar from "./topBar";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import imgBannerLive from '../../../assets/imgs/banner_live.png';
import imgVirtualGame from '../../../assets/imgs/instant_virtual_game.png';
import imgGoldenGame from "../../../assets/imgs/golden_virtual_game.png";
import imgSiliverGame from "../../../assets/imgs/silver_virtual_game.png";
import imgVirtual from "../../../assets/imgs/virtual_game.png";


const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Bets = () => {
    return (
        <>
        <div className="randing">
           <Topbar />
           <img src={imgBannerLive} style={{width:"100%"}} />
           <div style={{width:"100%",background:"#313131"}} className="text-white-color xs-title">
                <div className="gamearea">
                    <img src={imgVirtualGame} alt="gamearea" style={{width:"100%"}} />
                    <Typography>Instant Vitual Game</Typography>
                    <Button variant="contained">Play Game</Button>
                </div>
                <div className="gamearea">
                    <img src={imgGoldenGame} alt="gamearea" style={{width:"100%"}} />
                    <Typography>Golden Virtual Game</Typography>
                    <Button variant="contained">Play Game</Button>
                </div>
                <div className="gamearea">
                    <img src={imgSiliverGame} alt="gamearea" style={{width:"100%"}} />
                    <Typography>Siliver Virtual Game</Typography>
                    <Button variant="contained">Play Game</Button>
                </div>
                <div className="gamearea">
                    <img src={imgVirtual} alt="gamearea" style={{width:"100%"}} />
                    <Typography>Vitual Game</Typography>
                    <Button variant="contained">Play Game</Button>
                </div>
           </div>
        </div>
        </>
    )
}

export default Bets;