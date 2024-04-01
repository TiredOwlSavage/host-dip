import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { Paper, Typography, Box, Dialog, DialogActions, DialogTitle, Button, Switch, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import DeleteIcon from '@mui/icons-material/Delete';

const triggerOptions = [
  { type: 'Keyword', icon: '🔑' },
  { type: 'Command', icon: '⌨️' },
  { type: 'Button click', icon: '🖱' },
  { type: 'Conversation Start', icon: '💬' },
];

const StartNode = ({ data, id, updateNodeData }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [openTriggerDialog, setOpenTriggerDialog] = useState(false);
  const [selectedTriggerType, setSelectedTriggerType] = useState(null);
  const [triggerData, setTriggerData] = useState("");

  const handleOpenDialog = (index) => {
    setOpenDialog(true);
    setDeleteIndex(index);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDeleteIndex(null);
  };

  const handleDeleteTrigger = () => {
    const updatedTriggers = data.triggers.filter((_, index) => index !== deleteIndex);
    updateNodeData(id, { ...data, triggers: updatedTriggers });
    handleCloseDialog();
  };

  const handleAddTriggerClick = () => {
    setOpenTriggerDialog(true);
  };

  const handleCloseTriggerDialog = () => {
    setOpenTriggerDialog(false);
    setSelectedTriggerType(null);
    setTriggerData("");
  };

  const handleTriggerTypeSelect = (type) => {
    setSelectedTriggerType(type);
  };

  const handleSaveTrigger = () => {
    const newTrigger = {
      type: selectedTriggerType,
      data: triggerData,
      enabled: true // Или false, в зависимости от вашей логики по умолчанию
    };
    const updatedTriggers = [...(data.triggers || []), newTrigger];
    updateNodeData(id, { ...data, triggers: updatedTriggers });
    handleCloseTriggerDialog();
  };

  const handleTriggerChange = (index, checked) => {
    // Assuming data.triggers is an array of objects { type: string, data: string, enabled: boolean }
    const updatedTriggers = data.triggers.map((t, idx) => idx === index ? { ...t, enabled: checked } : t);
    updateNodeData(id, { ...data, triggers: updatedTriggers });
  };

  return (
    <Paper sx={{ border: 1, borderColor: 'divider', borderRadius: 3, minWidth: 250, padding: 2, boxShadow: 3 }}>
      {/* Node Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <PlayCircleFilledWhiteIcon sx={{ color: 'primary.main', marginRight: 1 }} />
        <Typography variant="subtitle1">{data.label}</Typography>
      </Box>
      {/* Triggers List */}
      <Box sx={{ marginBottom: 2 }}>
        {data.triggers.map((trigger, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 1, backgroundColor: 'action.selected', borderRadius: 1, marginBottom: 1 }}>
            <Typography>{trigger.type}: {trigger.data}</Typography>
            <div>
              <Switch
                  checked={trigger.enabled || false} // Здесь устанавливаем дефолтное значение
                  onChange={(e) => handleTriggerChange(index, e.target.checked)}
                />
              <IconButton aria-label="delete" size="small" onClick={() => handleOpenDialog(index)}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          </Box>
        ))}
      </Box>
      {/* Add Trigger Button */}
      <Box onClick={handleAddTriggerClick} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1, border: 2, borderColor: 'action.disabled', borderRadius: 1, cursor: 'pointer', textAlign: 'center' }}>
        <AddCircleOutlineIcon sx={{ marginRight: 1 }} />
        <Typography>Add Trigger</Typography>
      </Box>
      <Handle type="source" position={Position.Bottom} id="a" isConnectable={true} />

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">{"Удалить этот триггер?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Отмена</Button>
          <Button onClick={handleDeleteTrigger} autoFocus>Удалить</Button>
        </DialogActions>
      </Dialog>

      {/* Trigger Selection Dialog */}
      <Dialog open={openTriggerDialog} onClose={handleCloseTriggerDialog}>
        <DialogTitle>Добавить Триггер</DialogTitle>
        <DialogActions>
          {triggerOptions.map((option) => (
            <Button key={option.type} onClick={() => handleTriggerTypeSelect(option.type)}>
              {option.icon} {option.type}
            </Button>
          ))}
        </DialogActions>
      </Dialog>

      {/* Trigger Data Input Dialog */}
      {selectedTriggerType && (
        <Dialog open={true} onClose={handleCloseTriggerDialog}>
          <DialogTitle>Введите данные для {selectedTriggerType}</DialogTitle>
          <DialogActions>
            <input autoFocus value={triggerData} onChange={(e) => setTriggerData(e.target.value)} type="text" placeholder="Введите данные" />
            <Button onClick={handleCloseTriggerDialog}>Отмена</Button>
            <Button onClick={handleSaveTrigger}>Сохранить</Button>
          </DialogActions>
        </Dialog>
      )}
    </Paper>
  );
};

export default StartNode;
