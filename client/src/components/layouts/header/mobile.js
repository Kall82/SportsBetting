import React from "react";
import { Link, NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';


const footer = {
  position: "fixed",
  bottom: "0px",
  width: "100%",
  height: "85px",
  backgroundColor: "white",
  display: "flex",
  alignItems: 'center',
  justifyContent: "space-evenly",
  boxShadow: '0px -4px 20px 0px #00000026'
};

const FooterIcon = {
  width: "25px",
  height: "25px",
};

const FooterItem = ({ isActive }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: 'none',
  color: isActive
    ? "#146af5"
    : "black",
})

const FooterList = {
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  paddingLeft: "0px",
  marginBottom: "0px",
  overflow: "hidden",
};

const List = [
  { pic: "home", name: "Home", path: '/betfuz/home' },
  { pic: "bet_page", name: "Bets", path: '/betfuz/bets' },
  { pic: "nft", name: "NFT Market Place", path: '/betfuz/nft_marketplace' },
  { pic: "m3u", name: "Fuzflix", path: '/betfuz/fuzflix' },
  { pic: "video-player", name: "Fuzfix", path: '/betfuz/fuzfix' },
  { pic: "network", name: "Referral", path: '/betfuz/referral' },
];

function MobileHeader() {
  return (

      <div style={footer}>
        <Stack style={FooterList} direction="row" spacing={2} >
          {List.map((item, index) => (
            <NavLink style={FooterItem} key={index} to={item.path}>
              <img src={`./../assets/imgs/${item.pic}.png`} style={FooterIcon} />
              <span style={{ fontSize: "14px", fontWeight: '400', maxWidth: '76px' }}>{item.name}</span>
            </NavLink>
          ))}
        </Stack>
      </div>

  );
}

export default MobileHeader;
