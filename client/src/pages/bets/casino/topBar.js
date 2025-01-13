import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import imgSmallLogo from '../../../assets/imgs/small-logo.png';

export default function TopBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    return (
        <div className="topbar">
            <AppBar position="static">
                <Toolbar style={{ justifyContent: "space-between" }}>
                    <div style={{display:"flex"}}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <ArrowBackIosIcon size="large" />
                    </IconButton>
                    <img src={imgSmallLogo} width="100" style={{marginRight:"16px"}} />
                    </div>
                    <label className="text-bold" style={{fontSize:"18px"}}>Casino</label>
                    <div style={{display:"flex"}}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <HomeOutlinedIcon size="large" />
                    </IconButton>
                   
                    </div>
                    
                </Toolbar>
            </AppBar>
        </div>

    );
}
