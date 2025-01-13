
import React from "react";
import imgAvatarWoman from "../../assets/imgs/avatar_woman.png";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const BadgeAvatar = () => {
    return (
        <>
        <div className="badgeavatar" style={{width:"40%"}}>
        <img src={imgAvatarWoman} style={{width:"54px",height:"54px",borderRadius:"50%"}} />
        </div>
        <div className="info" style={{width:"60%"}}>
            <h1 style={{fontSize:"18px"}} className="font-bold text-white-color">Randy Carroll</h1>
            <h3 style={{fontSize:"16px"}} className="text-white-color" >randy@gmail.com</h3>
        </div>
        </>
    )
}

export default BadgeAvatar;