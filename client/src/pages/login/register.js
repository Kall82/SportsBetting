import React,{useEffect,useState}     from 'react';
import { Link }                       from "react-router-dom";

import TextField                      from '@mui/material/TextField';
import Typography                     from '@mui/material/Typography';
import IconButton                     from '@mui/material/IconButton';
import GoogleIcon                     from '@mui/icons-material/Google';
import Button                         from '@mui/material/Button';

import AvatarUpload                   from "../../components/buttons/upload";
import BetButton                      from "../../components/buttons/main"




export default function Register() {
  const [user_email, setUserEmail]        = useState(null);
  const [user_name, setUserName]          = useState(null);
  const [user_password, setUserPasswod]   = useState(null);
  
  const [user_avatar, setUserAvatar]      = useState(null);
  const [user_phone, setUserPhone]        = useState(null);
  
  const { gilad, jason, antoine } = state;
  
  const [state, setState] = React.useState(
  {
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => 
  {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };


  return (
    <div className="login">
      <img src="/assets/imgs/bet.png" className="mb-20" />
      <AvatarUpload style={{ margin: "auto" }} />
      <div className="bet-width mb-35" style={{ textAlign: "left" }}>
        <h3 className="md-title">Register</h3>
        <p>Enter your information to register</p>
      </div>
      <div className="bet-width mb-35">
        <TextField fullWidth label="User Name" className="mb-20 bet-width" />
        <TextField fullWidth label="Email Address" className="mb-20 bet-width" />
        <TextField fullWidth label="Mobile" className="mb-20 bet-width" /><br />
        <TextField fullWidth label="Password" className="mb-20 bet-width" />
        <Button variant="contained" disableElevation className="bg-bet-color bet-width mb-20" style={{ height: "60px", borderRadius: "15px", fontSize: "20px" }}>
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
            aria-label="show more" a
            aria-haspopup="true"
            style={{ background: "red", color: "white", padding: "15px", width: "70px", height: "70px" }}
          >
            <GoogleIcon />
          </IconButton>
        </div>
        <Typography component="legend"> Already have an account ?  <Link to="" className="text-red-color">Login</Link></Typography>

      </div>
    </div>

  );
}