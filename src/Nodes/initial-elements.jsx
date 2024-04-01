//initial-elements.jsx
import React from 'react';
import { MarkerType, Position } from 'reactflow';
import './customNodeStyle.css';
export const nodes = [
  {
    id: 'start-node',
    type: 'start',
    data: { label: 'Start', triggers: [] },
    position: { x: 100, y: 35 },
    draggable: true, // Устанавливаем true для возможности перемещения
    selectable: true, // Узел можно выделять
  },

  {
    id: 'end-node-1',
    type: 'end', // Используйте тип 'end' для конечного узла
    data: { label: 'End' },
    position: { x: 100, y: 525 }, // Конец потока
  },
  
  
];

export const edges = [
  { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
  { id: 'e1-3', source: '1', target: '3', animated: true },

];
