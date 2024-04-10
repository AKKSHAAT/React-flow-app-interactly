import React, { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';

import 'reactflow/dist/style.css';
import AddNodeButton from './AddNodeButton';

const initialEdges = [{ id: 'e1-2', source: '1', target: '2',  animated: true}];
const initialNodes = [
  { id: '1', position: { x: 400, y: 100 }, data: { label: '1' } },
  { id: '2', position: { x: 400, y: 200 }, data: { label: '2' } },
];

function NodeFlow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const addNote = () => {
    console.log("click");
    const xOffset = 100; // Horizontal offset between nodes
    const yOffset = 100; // Vertical offset between nodes
    // const maxX = Math.floor(Math.random() * xOffset)
    const maxX = Math.max(...nodes.map(node => node.position.x)) + xOffset;
    const maxY = Math.max(...nodes.map(node => node.position.y)) + yOffset;

    const node = {
      id: `node-${nodes.length + 1}`,
      position: { x: maxX, y: maxY },
      data: { label: `${nodes.length + 1}` },
      width: 150,
      height: 35
    };
    setNodes([...nodes, node]);
  };

  return (
    <div style={{ width: '99vw', height: '100vh' }}>
      <AddNodeButton onClick={addNote} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap nodeColor={'blue'}
        />
        <Background  gap={40} size={1} color={"#484848"}/>
      </ReactFlow>
    </div>
  );
}

export default NodeFlow;
