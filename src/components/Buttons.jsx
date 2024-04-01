import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

const Buttons = ({ handleButtonClick }) => {
  const handleClick = (buttonName, color) => {
    handleButtonClick(buttonName, color); // Вызываем функцию для обработки нажатия кнопки
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
      <Button
        component={RouterLink} to="/Details"
        variant="contained"
        color="inherit"
        size="small"
        sx={{ borderColor: '#ff5733', fontSize: '0.75rem', padding: '6px 12px' }}
        onClick={() => handleClick("Details", '#ff5733')}
      >
        Details
      </Button>

      <Button
        component={RouterLink} to="/integration"
        variant="contained"
        color="inherit"
        size="small"
        sx={{ borderColor: '#a2add0', fontSize: '0.75rem', padding: '6px 12px' }}
        onClick={() => handleClick("Integrations", '#ff5733')}
      >
        Integrations
      </Button>

      <Button
        component={RouterLink} to="/Chat"
        variant="contained"
        color="inherit"
        size="small"
        sx={{ borderColor: '#a2add0', fontSize: '0.75rem', padding: '6px 12px' }}
        onClick={() => handleClick("Chat", '#ff5733')}
      >
        Chat
      </Button>

      <Button
        component={RouterLink} to="/Logs"
        variant="contained"
        color="inherit"
        size="small"
        sx={{ borderColor: '#a2add0', fontSize: '0.75rem', padding: '6px 12px' }}
        onClick={() => handleClick("Logs", '#ff5733')}
      >
        Logs
      </Button>
      
      <Button
        component={RouterLink} to="/Configuration Variables"
        variant="contained"
        color="inherit"
        size="small"
        sx={{ borderColor: '#a2add0', fontSize: '0.75rem', padding: '6px 12px' }}
        onClick={() => handleClick("Configuration Variables", '#ff5733')}
      >
        Configuration Variables
      </Button>
      
      <Button
        component={RouterLink} to="/Conversations"
        variant="contained"
        color="inherit"
        size="small"
        sx={{ borderColor: '#a2add0', fontSize: '0.75rem', padding: '6px 12px' }}
        onClick={() => handleClick("Conversations", '#ff5733')}
      >
        Conversations
      </Button>
      
      <Button
        component={RouterLink} to="/Analytics"
        variant="contained"
        color="inherit"
        size="small"
        sx={{ borderColor: '#a2add0', fontSize: '0.75rem', padding: '6px 12px' }}
        onClick={() => handleClick("Analytics", '#ff5733')}
      >
        Analytics
      </Button>
    </Box>
  );
}

export default Buttons;
