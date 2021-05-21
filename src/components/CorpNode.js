import React from 'react';
import './CorpNode.css';

const bgColors = {
  open: '#001100',
  chest: '#001100',
  store: '#001100',
  ice: '#DDCC00',
  special: '#666622',
};

export default function CorpNode({ node }) {
  const { x, y, w, h, id, lock, type, health } = node;

  const nodeStyle = {
    left: x,
    top: y,
    width: `${w}px`,
    height: `${h}px`,
    backgroundColor: bgColors[type],
  };

  const statii = {
    open: `${0}%`,
    ice: `${health}/${health}`,
  };

  return <div className="corp-node" style={nodeStyle} onClick={() => console.log(id, x+w+8, y+h+8)}>
    <div className="status">{statii[type] || ''}</div>
    <div className="lock">{lock ? '🔒' : ''}</div>
  </div>;
}