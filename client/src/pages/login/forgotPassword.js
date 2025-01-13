import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Submit from "../../components/buttons/submit"
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import {Link} from "react-router-dom";


export default function ForgotPassword() {

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine } = state;

    return (
        <div className="login">
            <img src="/assets/imgs/bet.png" className="mb-20"/>
            <div className="bet-width mb-35" style={{textAlign:"left"}}>
            <h3 className="md-title">Sign In</h3>
            <p>welcome back</p>
            </div>
            <div className="bet-width mb-35">
            <TextField fullWidth label="Email Address" className="mb-20 bet-width" /><br/>
            </div>
            <Submit/>
            <hr/>
            <Typography component="legend">Already have an account ?  <Link to="" className="text-red-color">Login</Link></Typography>
            </div>

    );
}