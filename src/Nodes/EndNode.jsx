import React from 'react';
import { Handle, Position } from 'reactflow';
import { Paper, Typography, Box } from '@mui/material';
import LensIcon from '@mui/icons-material/Lens'; // Это иконка может использоваться в качестве индикатора статуса или точки остановки.

const EndNode = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        minWidth: 250,
        padding: '46px',
        borderRadius: '14px',
        boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        border: '40px',
      }}
    >
      <LensIcon sx={{ color: 'purple', fontSize: '1.5rem' }} />
      <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
        End
      </Typography>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={true}
        style={{ background: '#555', borderRadius: '10%', border: '1px solid white', transform: 'translate(10px, -10px)',top:'5px' }}
      />
    </Paper>
  );
};

export default EndNode;
