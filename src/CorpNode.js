import React from 'react';
import './CorpNode.css';

const bgColors = {
  open: '#001100',
  chest: '#001100',
  store: '#001100',
  ice: '#999933',
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

  return <div className="corp-node" style={nodeStyle} onClick={() => console.log(id)}>
    <div className="status">{statii[type] || ''}</div>
    <div className="lock">{lock ? '🔒' : ''}</div>
  </div>;
}
