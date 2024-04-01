import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure to import useNavigate
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';

const Icons = ({ handleEditClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

      <IconButton
        size="large"
        edge="end"
        aria-label="edit"
        onClick={() => {
          if (typeof handleEditClick === 'function') {
            handleEditClick();
          } else {
            console.error('handleEditClick is not a function', handleEditClick);
          }
        }}
        color="inherit"
      >
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
};

export default Icons;