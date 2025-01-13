import * as React from 'react';
import Button from '@mui/material/Button';

export default function BetButton() {
  return (
    <Button variant="contained" disableElevation className="bg-bet-color bet-width mb-20" style={{height:"60px",borderRadius:"15px",fontSize:"20px"}}>
      Login
    </Button>
  );
}