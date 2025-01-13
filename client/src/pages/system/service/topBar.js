import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';




export default function TopBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };



    const menuId = 'primary-search-account-menu';


    const mobileMenuId = 'primary-search-account-menu-mobile';


    return (
        <div className="topbar">
            <AppBar position="static">
                <Toolbar>
                    <div style={{display:"flex"}}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <ArrowBackIosIcon size="large" />
                    </IconButton>
                    <img src="assets/imgs/small-logo.png" width="100" style={{marginRight:"16px"}} />
                    </div>
                    <label className="text-bold" style={{fontSize:"18px"}}>Terms Of Service</label>
                </Toolbar>
            </AppBar>
        </div>

    );
}
