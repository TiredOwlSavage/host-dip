import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'; // Добавляем для текстового поля
import { Handle, Position } from 'reactflow';
import TelegramIcon from '@mui/icons-material/Telegram';

const CustomNode = ({ data, isConnectable }) => {
  // Обработчик изменения текстового поля, если необходим
  const handleChange = (event) => {
    // Обновить state или context, если необходимо
    console.log(event.target.value);
  };

  return (
    <Paper
      sx={{
        padding: '16px',
        borderRadius: '16px',
        minWidth: '355px',
        boxShadow: 3,
      }}
      elevation={4}
    >
      {/* Входной Handle с уникальным id */}
      <Handle
        type="target"
        position={Position.Top}
        id="input"
        style={{ borderRadius: '5px' }}
        isConnectable={isConnectable}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <TelegramIcon sx={{ color: '#0088cc', marginRight: '8px' }} />
        <Typography variant="subtitle2">Telegram Message</Typography>
      </Box>
      {/* Текстовое поле для ввода сообщения */}
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        placeholder="Type your message"
        defaultValue={data.label}
        onChange={handleChange}
        size="small"
      />
      <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', marginBottom: '8px' }}>
        Waiting for a reply from contact...
      </Typography>
      {/* Выходной Handle с уникальным id */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="output"
        style={{ borderRadius: '500px', bottom: '-2px' }} // Поднять чуть выше низа компонента
        isConnectable={isConnectable}
      />
    </Paper>
  );
};

export default CustomNode;
