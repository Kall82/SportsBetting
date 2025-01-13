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
                <Toolbar style={{ justifyContent: "space-between" }}>
                    <Sidebar />
                    <img src="assets/imgs/small-logo.png" width="100" style={{marginRight:"16px"}} />
                    <label className="text-bold" style={{fontSize:"18px"}}>Supported Bets</label>
                    <div style={{display:"flex"}}>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge color="error">
                            <NotificationsOutlinedIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <PersonOutlinedIcon size="large" />
                    </IconButton>
                   
                    </div>
                    
                </Toolbar>
            </AppBar>
        </div>

    );
}
