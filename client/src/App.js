import React from  'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import logo from './logo.svg';

import './App.css';
//These are pages
import Bets                 from "./pages/bets";
import BetEachFootballMatch from "./pages/bets/each-football";
import InstantVirtual       from "./pages/bets/instantVirtual";
import BetEachVirtualGame   from "./pages/bets/each-virtualgame";
import Casino               from "./pages/bets/casino";

import AboutUs              from "./pages/system/aboutus";
import ContactUs            from "./pages/system/contactus";
import Policy               from "./pages/system/policy";
import Service              from "./pages/system/service";
import Help                 from "./pages/system/help";
import Faq                  from "./pages/system/faq";
import UserProfile          from "./pages/system/userProfile";
import ConnectWallet        from "./pages/system/connectWallet";
import Wallet               from "./pages/system/wallet";

import Login                from "./pages/login";
import ForgotPassword       from "./pages/login/forgotPassword";
import Register             from "./pages/login/register";
import Verify               from "./pages/login/verify";
import SelectCountry        from "./pages/login/selectCountry";

import Loading              from "./pages/loading";
import Randing              from "./pages/randing";

import MarketPlace          from "./pages/nftMarketPlace/marketPlace";
import ReferralHome         from "./pages/referral/home";
import FriendsList          from "./pages/referral/friendslist";

//These are components
import Header               from "./components/layouts/header";
import Footer               from "./components/layouts/footer";

function App() {

  return (

    <GoogleOAuthProvider clientId="randycarrorll@gmail.com">
      <Router>
      <div className="betting-container pb-100">
      <Header />
      
      <Routes>
          <Route path="/"                 exact element={<Loading />} />
          <Route path="/login"            exact element={<Login />} />
          <Route path="/forgotpassword"   exact element={<ForgotPassword />}/>
          <Route path="/register"         exact element={<Register />} />
          <Route path="/aboutus"          exact element={<AboutUs />} />
          <Route path="/contactus"        exact element={<ContactUs />} />
          <Route path="/selectcountry"    exact element={<SelectCountry />} />
          <Route path="/instantvirtual"   exact element={<InstantVirtual />} />
          <Route path="/policy"           exact element={<Policy />} />
          <Route path="/service"          exact element={<Service />} />
          <Route path="/help"             exact element={<Help />} />
          <Route path="/faq"              exact element={<Faq />} />
          <Route path="/userprofile"      exact element={<UserProfile />} />
          <Route path="/casino"           exact element={<Casino />} />
          <Route path="/randing"          exact element={<Randing />} />
          <Route path="/wallet"           exact element={<Wallet />} />
          <Route path="/yourfriends"      exact element={<FriendsList />} />

          <Route path="/betfuz/referral"  exact element={<ReferralHome />} />
          <Route path="/betfuz/home"      exact element={<Randing />} />
        </Routes>

      </div>
      </Router>
    </GoogleOAuthProvider>
    
     );
}

export default App;
