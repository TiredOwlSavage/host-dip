import React, { useState, useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { Paper, Typography, Box, TextField, IconButton, Switch, Button } from '@mui/material'; // Убедитесь, что Button добавлен здесь
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const TextUpdaterNode = ({ data, id, updateNodeData, isConnectable }) => {
  const [fields, setFields] = useState(data.fields || [{ id: 0, text: '' }]);

  const addField = useCallback(() => {
    const newFieldId = fields.length > 0 ? fields[fields.length - 1].id + 1 : 0;
    setFields([...fields, { id: newFieldId, text: '' }]);
  }, [fields]);

  const removeField = useCallback((fieldId) => {
    setFields(fields.filter((field) => field.id !== fieldId));
  }, [fields]);

  const handleChange = useCallback((event, fieldId) => {
    const newFields = fields.map((field) => {
      if (field.id === fieldId) {
        return { ...field, text: event.target.value };
      }
      return field;
    });
    setFields(newFields);
    // Here you might want to update the node data as well, using updateNodeData
  }, [fields, updateNodeData]);

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 1,
        borderRadius: '16px',
        minWidth: 250,
        boxShadow: 3,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, gap: 1 }}>
        <AddCircleOutlineIcon color="primary" />
        <Typography variant="subtitle1">Send Message</Typography>
      </Box>
      {fields.map((field, index) => (
        <Box key={field.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <Handle
            type="target"
            position={Position.Top}
            id={`input-${field.id}`}
            isConnectable={isConnectable}
            style={{ background: '#555', borderRadius: '50%', top: '-3px' }}
          />
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            value={field.text}
            onChange={(e) => handleChange(e, field.id)}
            placeholder="Text input"
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => removeField(field.id)}>
                  <HighlightOffIcon />
                </IconButton>
              )
            }}
            sx={{ margin: '0 8px' }}
          />
          <Switch defaultChecked />
          <Handle
            type="source"
            position={Position.Bottom}
            id={`output-${field.id}`}
            isConnectable={isConnectable}
            style={{ background: '#555', borderRadius: '50%', bottom: '-3px' }}
          />
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', padding: 1 }}>
        <Button variant="contained" onClick={addField} startIcon={<AddCircleOutlineIcon />}>
          Add Field
        </Button>
      </Box>
    </Paper>
  );
};

export default TextUpdaterNode;
