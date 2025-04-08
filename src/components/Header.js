import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2C2C2C' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography variant="h6" sx={{ color: '#00BFFF' }} component="div" >
          Next JS App
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
