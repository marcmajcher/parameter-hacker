import React from 'react';
import useClickLogger from '../lib/useClickLogger';
import useNode from '../lib/useNode';
import './CorpNode.css';

export default function CorpNode({ node }) {
  const nodeHandler = useNode(node);
  const clickLogger = useClickLogger(node);

  function handleClick() {
    clickLogger();
    nodeHandler.click();
  }

  return <div className={nodeHandler.className} style={nodeHandler.position} onClick={handleClick}>
    <div className="lock">{nodeHandler.lock}</div>
    <div className={`status ${nodeHandler.complete ? 'complete' : ''}`}>{nodeHandler.status}</div>
    <div className="progress" style={nodeHandler.progressStyle}></div>
  </div>;
}
