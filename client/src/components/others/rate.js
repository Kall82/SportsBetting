import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Rate() {
    const [value, setValue] = React.useState(4);

  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Rating name="read-only" value={value} readOnly className="small-rate" />
    </Box>
  );
}
