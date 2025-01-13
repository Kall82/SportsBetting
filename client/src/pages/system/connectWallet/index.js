import * as React from 'react';

import imgBannerLive from '../../../assets/imgs/banner_live.png';
import Topbar from "./topBar";
import imgBitcoin from "../../../assets/imgs/bitcoin.png";
import imgEthereum from "../../../assets/imgs/ethereum.png";
import imgCrypto from "../../../assets/imgs/crypto.png";
import imgUsdt from "../../../assets/imgs/usdt.png";


export default function ConnectWallet() {
    return (
        <>
        <Topbar />
        <img src={imgBannerLive} style={{width:"100%"}} />

        <div className="connect-wallet">
            <div className="each-wallet mb-10">
              <img src={imgBitcoin} className="mb-5" />
              <h1 style={{fontSize:"18px"}} className="text-white-color">Bitcoin</h1>
            </div>
            <div className="each-wallet mb-10">
            <img src={imgEthereum} className="mb-5" />
            <h1 style={{fontSize:"18px"}} className="text-white-color">Ethereum</h1>
            </div>
            <div className="each-wallet">
            <img src={imgCrypto} className="mb-5" />
            <h1 style={{fontSize:"18px"}} className="text-white-color">Crypto</h1>
            </div>
            <div className="each-wallet">
            <img src={imgUsdt} className="mb-5" />
            <h1 style={{fontSize:"18px"}} className="text-white-color">Usdt</h1>
            </div>
        </div>         
        </>
       

    );
}