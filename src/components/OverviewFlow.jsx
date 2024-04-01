import React, { useCallback, useState, useEffect, useMemo } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';
import '/src/Nodes/customNodeStyle.css';
import { nodes as initialNodes, edges as initialEdges } from '../Nodes/initial-elements';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import StartNode from "/src/Nodes/StartNode.jsx";
import TextOutputNode from "/src/Nodes/TextOutputNode.jsx";
import InputNode from "/src/Nodes/InputNode.jsx";
import MenuNode from "/src/Nodes/MenuNode.jsx";
import EndNode from "/src/Nodes/EndNode.jsx";
import HandlerNode from "/src/Nodes/HandlerNode.jsx"; 
import './controlsStyle.css'; 

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedEdge, setSelectedEdge] = useState(null);
  const [nodeType, setNodeType] = useState('textOutput');

  const updateNodeData = useCallback((nodeId, newData) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...newData } } : node
      )
    );
  }, [setNodes]);

  const addTriggerToStartNode = useCallback((trigger) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.type === 'start'
          ? {
              ...node,
              data: { ...node.data, triggers: [...node.data.triggers, trigger] },
            }
          : node
      )
    );
  }, [setNodes]);

  const nodeTypes = useMemo(() => ({
    start: (nodeProps) => <StartNode {...nodeProps} updateNodeData={updateNodeData} />,
    textOutput: TextOutputNode,
    inputNode: InputNode,
    menu: MenuNode,
    end: EndNode,
    handler: HandlerNode,
  }), [updateNodeData]);

  const onConnect = useCallback((params) => {
    const sourceIsHandler = nodes.find((n) => n.id === params.source)?.type === 'handler';
    const targetIsHandler = nodes.find((n) => n.id === params.target)?.type === 'handler';
  
    if (sourceIsHandler) {
      // Узел Handler может иметь только одно исходящее соединение
      const sourceEdges = edges.filter((e) => e.source === params.source);
      if (sourceEdges.length === 0) {
        setEdges((eds) => addEdge({ ...params, type: 'smoothstep' }, eds));
      }
    } else if (!targetIsHandler) {
      // Все узлы, кроме Handler, могут иметь множественные входящие соединения
      setEdges((eds) => addEdge({ ...params, type: 'smoothstep' }, eds));
    } else {
      console.log('Connection not added. Handlers can have only one outgoing connection, and nodes can\'t be connected to a handler node as a target.');
    }
  }, [setEdges, edges, nodes]);
  
  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setSelectedEdge(null);
  }, []);

  const onEdgeClick = useCallback((event, edge) => {
    setSelectedEdge(edge);
    setSelectedNode(null);
  }, []);

  const addNode = useCallback(() => {
    const newNode = {
      id: `node-${nodeType}-${nodes.length + 1}`,
      type: nodeType,
      data: { label: `${nodeType} Node` },
      position: { x: Math.random() * window.innerWidth / 2, y: Math.random() * window.innerHeight / 2 },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [nodeType, nodes.length, setNodes]);

  // Добавленные функции для сохранения и восстановления состояния
  const flowKey = 'myFlowState';

  const saveFlow = useCallback(() => {
    const flow = { nodes, edges };
    localStorage.setItem(flowKey, JSON.stringify(flow));
  }, [nodes, edges]);

  const restoreFlow = useCallback(() => {
    const flowString = localStorage.getItem(flowKey);
    if (flowString) {
      const flow = JSON.parse(flowString);
      setNodes(flow.nodes);
      setEdges(flow.edges);
    }
  }, [setNodes, setEdges]);

  useEffect(() => {
    restoreFlow();
  }, [restoreFlow]);

  // Функция для удаления выбранного узла или ребра
  const removeSelected = useCallback(() => {
    if (selectedNode) {
      setNodes((ns) => ns.filter((n) => n.id !== selectedNode.id));
      setEdges((es) => es.filter((e) => e.source !== selectedNode.id && e.target !== selectedNode.id));
      setSelectedNode(null);
    } else if (selectedEdge) {
      setEdges((es) => es.filter((e) => e.id !== selectedEdge.id));
      setSelectedEdge(null);
    }
  }, [selectedNode, selectedEdge, setNodes, setEdges]);

  // Отслеживание нажатия клавиш для удаления
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Delete') {
        removeSelected();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [removeSelected]);

  return (
    <ReactFlowProvider>
      <Box className="reactflow-wrapper" sx={{ position: 'relative', height: '100%', width: '100%' }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 10,
          padding: '0.5rem',
          backgroundColor: 'white',
          boxShadow: 1,
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <FormControl fullWidth size="small">
            <InputLabel id="node-type-select-label">Node Type</InputLabel>
            <Select
              labelId="node-type-select-label"
              id="node-type-select"
              value={nodeType}
              label="Node Type"
              onChange={(e) => setNodeType(e.target.value)}
            >
              <MenuItem value="textOutput">Text Output Node</MenuItem>
              <MenuItem value="inputNode">Input Node</MenuItem>
              <MenuItem value="menu">Menu Node</MenuItem>
              <MenuItem value="handler">Handler</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={addNode} size="small">
            Добавить узел
          </Button>
          <Button variant="contained" color="primary" onClick={saveFlow} size="small">
            Сохранить
          </Button>
          <Button variant="contained" color="secondary" onClick={restoreFlow} size="small">
            Восстановить
          </Button>
        </Box>

        <ReactFlow
          style={{ height: '100%', width: '100%' }}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="top-right"
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          onEdgeClick={onEdgeClick}
        >
          <MiniMap />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </Box>
    </ReactFlowProvider>
  );
};

export default OverviewFlow;
