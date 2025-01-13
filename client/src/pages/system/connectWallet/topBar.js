import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

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
        <div className="topbar">
            <AppBar position="static">
                <Toolbar>
                    <div style={{display:"flex"}}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <ArrowBackIosIcon size="large" />
                    </IconButton>
                    <img src="assets/imgs/small-logo.png" width="100" style={{marginRight:"16px"}} />
                    </div>
                    <label className="text-bold" style={{fontSize:"18px"}}>Connect Wallet</label>
                </Toolbar>
            </AppBar>
        </div>

    );
}
