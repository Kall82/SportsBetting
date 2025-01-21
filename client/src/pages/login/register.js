import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

import AvatarUpload from "../../components/buttons/upload";
import BetButton from "../../components/buttons/main"

let serverUrl = 'http://localhost:5000';

export default function Register() {
  const [user_email, setUserEmail] = useState('');
  const [user_name, setUserName] = useState('');
  const [user_password, setUserPasswod] = useState('');

  const [user_avatar, setUserAvatar] = useState('');
  const [user_phone, setUserPhone] = useState(null);

  //user signup event
  const addUser = async (event) => {
    const signupInfo = { user_name, user_password, user_email }
    let response = await axios.post(`${serverUrl}/api/user/signup`, signupInfo);
    console.log('response ===>', response.data)
    alert(response.data.message);
  }

  return (
    <div className="login">
      <img src="/assets/imgs/bet.png" className="mb-20" />

      <AvatarUpload style={{ margin: "auto" }} />
      <div className="bet-width mb-35" style={{ textAlign: "left" }}>
        <h3 className="md-title">Register</h3>
        <p>Enter your information to register</p>
      </div>

      <div className="bet-width mb-35">

        <TextField fullWidth label="User Name" className="mb-20 bet-width" value={user_name} onChange={(e) => setUserName(e.target.value)} />
        <TextField fullWidth label="Email Address" className="mb-20 bet-width" value={user_email} onChange={(e) => setUserEmail(e.target.value)} />
        <TextField fullWidth label="Mobile" className="mb-20 bet-width" /><br />
        <TextField fullWidth label="Password" className="mb-20 bet-width" value={user_password} onChange={(e) => setUserPasswod(e.target.value)} />

        <Button variant="contained" disableElevation className="bg-bet-color bet-width mb-20 h-[60px] text-[20px]" onClick={addUser}>
          Register
        </Button>

        <hr />

        <div className="bet-width mb-30" style={{ textAlign: "center" }}>

          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            style={{ background: "blue", color: "white", marginRight: "10px", padding: "15px", width: "70px", height: "70px" }}
          >
            <GoogleIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            style={{ background: "red", color: "white", padding: "15px", width: "70px", height: "70px" }}
          >
            <GoogleIcon />
          </IconButton>
        </div>
        <Typography component="legend"> Already have an account ?  <Link to="/login" className="text-red-color">Login</Link></Typography>
      </div>
    </div>

  );
}