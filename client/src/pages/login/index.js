import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

import axios from 'axios';

export default function Login() {

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = async () => {
    // let response = await axios.post(`${serverUrl}/api/user/signup`), ))
    // googleLogout();
    setProfile(null);
  };

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const [signInfo, setSignIfo] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;

  return (
    <div className="login">
      <img src="/assets/imgs/bet.png" className="mb-20" />
      <div className="bet-width mb-35" style={{ textAlign: "left" }}>
        <h3 className="md-title">Sign In</h3>
        <p>welcome back</p>
      </div>
      
      <div className="bet-width mb-35">
        <TextField fullWidth label="Email Address" className="mb-20 bet-width" /><br />
        <TextField fullWidth label="Password" className="mb-20 bet-width" />
        <div style={{ display: "flex", justifyContent: "space-between" }} className='mb-20 bet-width'>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Remember me"
          />


          <Link to=""><Typography component="legend" className="text-red-color sm-title">Forgot a password?</Typography></Link>
        </div>
        <Button variant="contained" disableElevation className="bg-bet-color bet-width mb-20" style={{ height: "60px", borderRadius: "15px", fontSize: "20px" }}>
          Login
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
          {profile ? (
            <IconButton
              size="large"
              aria-label="show more" a
              aria-haspopup="true"
              style={{ background: "red", color: "white", padding: "15px", width: "70px", height: "70px" }}
              onClick={logOut}
            >
              <GoogleIcon />
            </IconButton>
          ) : (
            <IconButton
              size="large"
              aria-label="show more" a
              aria-haspopup="true"
              style={{ background: "red", color: "white", padding: "15px", width: "70px", height: "70px" }}
              onClick={login}
            >
              <GoogleIcon />
            </IconButton>
          )}

        </div>
        <Typography component="legend"> Do you have an account ? <Link to="" className="text-red-color">Register</Link></Typography>

      </div>
    </div>

  );
}