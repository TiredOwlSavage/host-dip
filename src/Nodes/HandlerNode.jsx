import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { Paper, Typography, Box, TextField, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const HandlerNode = ({ data }) => {
  const [command, setCommand] = useState(''); // Предположим, что command - это новое состояние для текстовой команды

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
    // Здесь может быть логика для обновления данных узла
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 250,
        borderRadius: '12px',
        boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.2)',
        overflow: 'hidden', // Это гарантирует, что всё содержимое будет внутри закругленных углов
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          backgroundColor: '#ffffff',
        }}
      >
        <IconButton size="small" sx={{ marginRight: 1 }}>
          <SettingsIcon color="primary" />
        </IconButton>
        <Typography variant="subtitle1">
          Hook
        </Typography>
      </Box>
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        value={command}
        onChange={handleCommandChange}
        placeholder="Введите команду"
        sx={{
          padding: '13px',
          '.MuiOutlinedInput-root': { // Применяем стили к корню input элемента для корректировки padding
            padding: 0,
          },
        }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={true}
        style={{ background: '#555', borderRadius: '10%', bottom: '-3px' }} // Поднял handle немного выше, чтобы он не выходил за пределы тени
      />
    </Paper>
  );
};

export default HandlerNode;
