import React from 'react';
import './CorpNode.css';

export default function CorpNode({ node }) {
  const { x, y, w, h, id, lock, type } = node;

  const nodeStyle = {
    left: x,
    top: y,
    width: `${w}px`,
    height: `${h}px`,
    backgroundColor: type === 'open' ? '#001100' : '#999933',
  };

  return <div className="corp-node" style={nodeStyle}>Node [{id}] {lock ? 'LOCKED' : ''}</div>;
}
