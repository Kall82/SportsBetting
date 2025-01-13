import * as React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Submit from "../../components/buttons/submit"
import SelectItem from "../../components/buttons/select";
import {Link} from "react-router-dom";
import imgBannerLive from '../../assets/imgs/banner_live.png';
import Topbar from "./topBar";

export default function SelectCountry() {

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

   const name1 = "Age";
   const country = "UK";

    return (
        <>
        <Topbar />
         <img src={imgBannerLive} style={{width:"100%"}} />
            <div className="login">
            <div className="bet-width mb-35">
            <SelectItem name={name1} data={country} className="mb-20 bet-width" />
            <SelectItem name={name1} data={country} className="mb-20 bet-width" />
            <SelectItem name={name1} data={country} className="mb-20 bet-width" />
            <SelectItem name={name1} data={country} className="mb-20 bet-width" />
            <Typography component="">
            <Link to=""> Note </Link> : Please note that country of residence & currency are not changeable after account creation.
            </Typography>
            </div>
            <Submit/>
            <hr/>
            <Typography component="legend">Already have an account ?  <Link to="" className="text-red-color">Login</Link></Typography>
            </div>
        </>
       

    );
}