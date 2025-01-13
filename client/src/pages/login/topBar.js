import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import Sidebar from "../../components/layouts/sidebar";


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


    return (
        <div className="topbar" style={{height:"76px"}}>
            <AppBar position="static">
                <Toolbar>
                    <img src="assets/imgs/small-logo.png" width="100" style={{marginRight:"16px"}} />
                    
                </Toolbar>
            </AppBar>
        </div>

    );
}
