import React from "react";
import Topbar from "./topBar";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import imgBannerLive from '../../../assets/imgs/banner_live.png';
import imgVirtualGame from '../../../assets/imgs/instant_virtual_game.png';
import imgGoldenGame from "../../../assets/imgs/golden_virtual_game.png";
import imgSiliverGame from "../../../assets/imgs/silver_virtual_game.png";
import imgVirtual from "../../../assets/imgs/virtual_game.png";
import imgGreen from "../../../assets/imgs/green.png";
import Eachboard from "./eachBoard";


const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Bets = () => {
    return (
        <>
        <div className="randing casino">
           <Topbar />
           <img src={imgBannerLive} style={{width:"100%"}} />
           <Eachboard />
           <div style={{width:"100%",background:"#313131"}} className="text-white-color xs-title">
                <div className="gamearea">
                    <img src={imgVirtualGame} alt="gamearea" style={{width:"100%"}} />
                    <div style={{width:"100%",justifyContent:"space-between",display:"flex",padding:"5px"}}>
                        <Typography className="text-bold">Casio Game</Typography>
                        <Typography className="text-bold"><img src={imgGreen} /><Link to="">200 Players</Link></Typography>
                    </div>
                    <Button variant="contained">POPULAR</Button>
                </div>
                <div className="gamearea">
                    <img src={imgVirtualGame} alt="gamearea" style={{width:"100%"}} />
                    <div style={{width:"100%",justifyContent:"space-between",display:"flex",padding:"5px"}}>
                        <Typography className="text-bold">Casio Game</Typography>
                        <Typography className="text-bold"><img src={imgGreen} /><Link to="">200 Players</Link></Typography>
                    </div>
                    <Button variant="contained">POPULAR</Button>
                </div>
                <div className="gamearea">
                    <img src={imgVirtualGame} alt="gamearea" style={{width:"100%"}} />
                    <div style={{width:"100%",justifyContent:"space-between",display:"flex",padding:"5px"}}>
                        <Typography className="text-bold">Casio Game</Typography>
                        <Typography className="text-bold"><img src={imgGreen} /><Link to="">200 Players</Link></Typography>
                    </div>
                    <Button variant="contained">POPULAR</Button>
                </div>
                <div className="gamearea">
                    <img src={imgVirtualGame} alt="gamearea" style={{width:"100%"}} />
                    <div style={{width:"100%",justifyContent:"space-between",display:"flex",padding:"5px"}}>
                        <Typography className="text-bold">Casio Game</Typography>
                        <Typography className="text-bold"><img src={imgGreen} /><Link to="">200 Players</Link></Typography>
                    </div>
                    <Button variant="contained">POPULAR</Button>
                </div>
           </div>
         
        </div>
        </>
    )
}

export default Bets;