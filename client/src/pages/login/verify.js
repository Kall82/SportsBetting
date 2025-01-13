import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';


export default function Verify() {

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
        <div className="login verify">
            <img src="/assets/imgs/bet.png" className="mb-20" />
            <div className="bet-width mb-35" style={{ textAlign: "left" }}>
                <h3 className="md-title">Verify Account</h3>
                <p>Enter the PIN</p>
            </div>
            <div className="bet-width mb-35" style={{ display: "flex", justifyContent: "space-between" }}>
                <OutlinedInput
                    aria-describedby="outlined-weight-helper-text"
                    className="mr-10"
                    
                />
                <OutlinedInput
                    aria-describedby="outlined-weight-helper-text"
                    className="mr-10"
                />
                <OutlinedInput
                    aria-describedby="outlined-weight-helper-text"
                    className="mr-10"
                />
                <OutlinedInput
                    aria-describedby="outlined-weight-helper-text"
                    className="mr-10"
                />
                <OutlinedInput
                    aria-describedby="outlined-weight-helper-text"
                    className="mr-10"
                />
                <OutlinedInput
                    aria-describedby="outlined-weight-helper-text"
                    
                />
            </div>
            <Button variant="contained" disableElevation className="bg-bet-color bet-width" style={{ height: "60px", borderRadius: "15px", fontSize: "20px" }}>
                Verify
            </Button>
            <hr />
            <Typography component="legend"><Link to="" className="text-bet-color">Resend Code</Link></Typography>
        </div>

    );
}