import React from 'react';
import './CorpNode.css';

export default function CorpNode({ node }) {
  const { id, pos, lock, type } = node;

  const [x, y, w, h] = pos.split(',').map(n => parseInt(n, 10));

  const nodeStyle = {
    left: x,
    top: y,
    width: `${w}px`,
    height: `${h}px`,
    backgroundColor: type === 'open' ? '#339933' : '666633',
  };

  return <div className="corp-node" style={nodeStyle}>Node [{id}] {lock ? 'LOCKED' : ''}</div>;
}
