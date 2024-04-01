import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import './customNodeStyle.css';
import { v4 as uuidv4 } from 'uuid';

function MenuNode() {
  const [fields, setFields] = useState([]);

  const addNewField = () => {
    if (fields.length < 8) {
      const newId = `field-${fields.length}-${uuidv4()}`;
      setFields(fields.concat({ id: newId, value: '', isEditable: true, isConnected: false }));
    }
  };

  const handleInputChange = (id, event) => {
    setFields(fields.map(field => {
      if (field.id === id) {
        return { ...field, value: event.target.value };
      }
      return field;
    }));
  };

  const confirmField = (id) => {
    setFields(fields.map(field => {
      if (field.id === id) {
        return { ...field, isEditable: false };
      }
      return field;
    }));
  };

  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const editField = (id) => {
    // Логика редактирования: позволяем изменять только если поле не подтверждено
    setFields(fields.map(field => {
      if (field.id === id && !field.isConnected) {
        return { ...field, isEditable: true };
      }
      return field;
    }));
  };

  return (
    <div className="react-flow__node-custom menu-node">
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: '#555' }}
        isConnectable={true}
      />
      <div className="custom-node__header">Menu Node</div>
      <div className="custom-node__body">
        {fields.map((field) => (
          <div key={field.id} className="field-wrapper">
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleInputChange(field.id, e)}
              disabled={!field.isEditable}
            />
            {!field.isConnected && field.isEditable && (
              <button onClick={() => confirmField(field.id)}>✓</button>
            )}
            <Handle
              type="source"
              position={Position.Right}
              id={`source-${field.id}`}
              className="handle-source"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            />
            <button onClick={() => removeField(field.id)} className="remove-field">×</button>
            <button onClick={() => editField(field.id)} className="edit-field">✎</button>
          </div>
        ))}
        {fields.length < 8 && <button onClick={addNewField}>Add Field</button>}
      </div>
    </div>
  );
}

export default MenuNode;
