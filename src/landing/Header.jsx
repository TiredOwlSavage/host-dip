import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => () => {
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ marginRight: 4 }}>
              Logo
            </Typography>
            <Button color="inherit" onClick={handleNavigate('/home')}>Home</Button>
            <Button color="inherit" onClick={handleNavigate('/features')}>Features</Button>
            <Button color="inherit" onClick={handleNavigate('/pricing')}>Pricing</Button>
            <Button color="inherit" onClick={handleNavigate('/about')}>About</Button>
          </Box>
          <Box>
            <Button color="inherit" onClick={handleNavigate('/login')}>Sign In</Button>
            <Button color="inherit" onClick={handleNavigate('/register')}>Sign Up</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
