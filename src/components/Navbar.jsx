import React, { useState } from 'react';
import Buttons from './Buttons';
import Icons from './Icons';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const Navbar = ({ handleEditClick }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const handleButtonClick = (buttonName) => {
    console.log(`Button clicked: ${buttonName}`);
  };

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', overflow: 'hidden' }}>
      <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'center', padding: '8px' }}>
        <Buttons handleButtonClick={handleButtonClick} />
        <Icons handleEditClick={handleEditClick} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
