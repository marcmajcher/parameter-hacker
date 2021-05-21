import React from 'react';
import { useDispatch } from 'react-redux';
import { logger } from '../actions';
import './CorpNode.css';

export default function CorpNode({ node }) {
  const { x, y, w, h, id, lock, type, health } = node;
  const dispatch = useDispatch();

  const position = {
    left: x,
    top: y,
    width: `${w}px`,
    height: `${h}px`,
  };

  const statii = {
    open: `${0}%`,
    ice: `${health}/${health}`,
  };

  function handleClick(e) {
    dispatch(logger(id));
    // console.log(id, x+w+8, y+h+8)



  }

  return <div className={`corp-node ${type}`} style={position} onClick={handleClick}>
    <div className="status">{statii[type] || ''}</div>
    <div className="lock">{lock ? '🔒' : ''}</div>
  </div>;
}
