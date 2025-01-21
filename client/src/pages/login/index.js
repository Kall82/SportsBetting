import React, { useEffect, useState } from 'react';
import { Link }                       from "react-router-dom";
import axios                          from 'axios';

import TextField        from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox         from '@mui/material/Checkbox';
import Typography       from '@mui/material/Typography';
import Button           from '@mui/material/Button';
import IconButton       from '@mui/material/IconButton';
import GoogleIcon       from '@mui/icons-material/Google';


import { googleLogout, useGoogleLogin } from '@react-oauth/google';

let serverUrl = 'http://localhost:5000';


export default function Login() {

  const [user, setUser]                  = useState([]);
  const [profile, setProfile]            = useState([]);
  const [user_email, setUserEmail]       = useState('');
  const [user_password, setUserPassword] = useState('');
  const [state, setState]                = useState({gilad: true, jason: false, antoine: false});
  const [signInfo, setSignInfo]          = useState({ email: '', password: ''}); 

  let res = '';

  const { gilad, jason, antoine } = state;

  //This is google login event
  const login = useGoogleLogin
  ({
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

  //This is google handle event
  const handleChange = (event) =>
  {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  //This is user login event
  const userLogin = async (event) =>
  {
    const signinInfo = {user_email, user_password}
    res = await axios.post(`${serverUrl}/api/user/signin`, signinInfo);
    console.log("login response ===> ", res.data);
    alert(res.data.message);
  }

  //This is user logout event
  const logOut = async () => 
  {
    setProfile(null);
    res = await axios.post(`${serverUrl}/api/user/`);
    googleLogout();
  }




  return (
    <div className="login">
      <img src="/assets/imgs/bet.png" className="mb-20" />
      <div className="bet-width mb-35" style={{ textAlign: "left" }}>
        <h3 className="md-title">Sign In</h3>
        <p>welcome back</p>
      </div>

      <div className="bet-width mb-35">
        <TextField fullWidth label="Email Address" className="mb-20 bet-width" value={user_email} onChange={(e) => setUserEmail(e.target.value)} /><br />
        <TextField fullWidth label="Password" className="mb-20 bet-width" value={user_password} onChange={(e) => setUserPassword(e.target.value)} />
        <div style={{ display: "flex", justifyContent: "space-between" }} className='mb-20 bet-width'>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Remember me"
          />


          <Link to=""><Typography component="legend" className="text-red-color sm-title">Forgot a password?</Typography></Link>
        </div>

        <Button variant="contained" disableElevation className="bg-bet-color bet-width mb-20 h-[60px]" style={{ height: "60px", borderRadius: "15px", fontSize: "20px" }} onClick={userLogin}>
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