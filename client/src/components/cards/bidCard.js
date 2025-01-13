import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import CardActionArea from '@mui/material/CardActionArea';
import imgBird from "../../assets/imgs/bid_2.png";
import Button from '@mui/material/Button';


export default function BidCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgBird}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"18px",margin:"0"}} className="text-bold">
            Fill the space
          </Typography>
          <Link to=""  style={{fontSize:"14px"}}>John shina</Link>
          <Typography variant="body2"  className="text-bold mb-5">
          Current Bid : 40.00
          </Typography>
          <Button variant="contained" style={{width:"100%"}} className="circle">Place bid</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}